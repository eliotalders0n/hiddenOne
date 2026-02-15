import { useEffect, useRef } from 'react';
import { db } from '../firebase_config';
import { doc, setDoc, getDoc, runTransaction } from 'firebase/firestore';

// ============ HELPERS ============
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
  return 'desktop';
};

const getBrowser = () => {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  return 'Other';
};

const generateVisitorId = () => {
  const fp = [navigator.userAgent, navigator.language, window.screen.width, window.screen.height, new Date().getTimezoneOffset()].join('|');
  let hash = 0;
  for (let i = 0; i < fp.length; i++) hash = ((hash << 5) - hash + fp.charCodeAt(i)) & 0xffffffff;
  return 'v_' + Math.abs(hash).toString(36);
};

// ============ JOURNAL (Global State) ============
const journal = {
  sessionId: Date.now().toString(36),
  startTime: Date.now(),
  maxScroll: 0,
  sections: new Set(),
  projectClicks: new Map(), // Track clicks per project
  focusStart: Date.now(),
  totalFocusTime: 0,
  isFocused: true,
  // Tracking what's been synced
  lastSyncedScroll: 0,
  lastSyncedSections: new Set(),
  lastSyncedTime: 0,
  lastSyncedFocusTime: 0,
  deviceSynced: false,
  sessionCounted: false,
};

// ============ INTERVALS (Global - persist across StrictMode) ============
let scrollIntervalId = null;
let sectionIntervalId = null;
let syncIntervalId = null;
let initialSyncId = null;

// ============ MAIN HOOK ============
export const useAnalytics = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Clear any existing intervals (safety)
    if (scrollIntervalId) clearInterval(scrollIntervalId);
    if (sectionIntervalId) clearInterval(sectionIntervalId);
    if (syncIntervalId) clearInterval(syncIntervalId);
    if (initialSyncId) clearTimeout(initialSyncId);

    // Reset journal for new session
    journal.sessionId = Date.now().toString(36);
    journal.startTime = Date.now();
    journal.maxScroll = 0;
    journal.sections = new Set();
    journal.projectClicks = new Map();
    journal.focusStart = Date.now();
    journal.totalFocusTime = 0;
    journal.isFocused = true;
    journal.lastSyncedScroll = 0;
    journal.lastSyncedSections = new Set();
    journal.lastSyncedTime = 0;
    journal.lastSyncedFocusTime = 0;
    journal.deviceSynced = false;
    journal.sessionCounted = false;

    console.log('📊 Analytics started');

    // ========== SCROLL TRACKING (every 100ms) ==========
    scrollIntervalId = setInterval(() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const winHeight = window.innerHeight;
      const scrollable = docHeight - winHeight;

      if (scrollable > 0) {
        const percent = Math.min(100, Math.round((scrollY / scrollable) * 100));
        if (percent > journal.maxScroll) {
          journal.maxScroll = percent;
        }
      }
    }, 100);

    // ========== SECTION TRACKING (every 300ms) ==========
    const checkSections = () => {
      const sectionIds = ['hero', 'about', 'portfolio', 'experience', 'contact'];
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView && !journal.sections.has(id)) {
            journal.sections.add(id);
            console.log('👁️ Section:', id);
          }
        }
      });
    };
    sectionIntervalId = setInterval(checkSections, 300);
    setTimeout(checkSections, 100);

    // ========== CLICK TRACKING ==========
    const handleClick = (e) => {
      const projectEl = e.target.closest('[data-project]');
      if (projectEl) {
        const name = projectEl.dataset.project;
        const currentClicks = journal.projectClicks.get(name) || 0;
        journal.projectClicks.set(name, currentClicks + 1);
        console.log('🖱️ Click:', name);

        // Save click immediately
        saveProjectClick(name);
      }
    };
    document.addEventListener('click', handleClick, true);

    // ========== FOCUS TRACKING ==========
    const handleVisibility = () => {
      if (document.hidden) {
        journal.totalFocusTime += Date.now() - journal.focusStart;
        journal.isFocused = false;
      } else {
        journal.focusStart = Date.now();
        journal.isFocused = true;
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // ========== TRACK VISIT ==========
    trackVisit();

    // ========== SYNC TO FIREBASE (continuously) ==========
    const syncToFirebase = async (isFinal = false) => {
      // Calculate current focus time
      if (journal.isFocused) {
        journal.totalFocusTime += Date.now() - journal.focusStart;
        journal.focusStart = Date.now();
      }

      const totalTime = Math.round((Date.now() - journal.startTime) / 1000);
      const focusTime = Math.round(journal.totalFocusTime / 1000);
      const scrollBucket = journal.maxScroll >= 100 ? '100'
        : journal.maxScroll >= 75 ? '75'
        : journal.maxScroll >= 50 ? '50'
        : journal.maxScroll >= 25 ? '25' : '0';

      // Calculate deltas (what's new since last sync)
      const timeDelta = totalTime - journal.lastSyncedTime;
      const newSections = [...journal.sections].filter(s => !journal.lastSyncedSections.has(s));
      const scrollChanged = journal.maxScroll > journal.lastSyncedScroll;

      // Skip if nothing changed
      if (timeDelta < 1 && newSections.length === 0 && !scrollChanged && journal.sessionCounted) {
        return;
      }

      console.log('📤 Sync:', {
        scroll: journal.maxScroll + '%',
        sections: [...journal.sections],
        time: totalTime + 's',
        isFinal
      });

      try {
        const engagementRef = doc(db, 'stats', 'engagement');
        const snap = await getDoc(engagementRef);
        const current = snap.exists() ? snap.data() : {
          totalTimeOnPage: 0,
          totalFocusTime: 0,
          sessions: 0,
          scrollDepth: { '0': 0, '25': 0, '50': 0, '75': 0, '100': 0 },
          sectionsViewed: {},
        };

        // Update sections (only new ones)
        const sectionsUpdate = { ...current.sectionsViewed };
        newSections.forEach(s => {
          sectionsUpdate[s] = (sectionsUpdate[s] || 0) + 1;
          journal.lastSyncedSections.add(s);
        });

        // Update scroll depth bucket (only if changed to higher bucket)
        const scrollDepthUpdate = { ...current.scrollDepth };
        if (scrollChanged && !journal.lastSyncedScroll) {
          // First scroll record for this session
          scrollDepthUpdate[scrollBucket] = (scrollDepthUpdate[scrollBucket] || 0) + 1;
        } else if (scrollChanged) {
          // Scroll increased - remove from old bucket, add to new
          const oldBucket = journal.lastSyncedScroll >= 100 ? '100'
            : journal.lastSyncedScroll >= 75 ? '75'
            : journal.lastSyncedScroll >= 50 ? '50'
            : journal.lastSyncedScroll >= 25 ? '25' : '0';
          if (oldBucket !== scrollBucket) {
            scrollDepthUpdate[oldBucket] = Math.max(0, (scrollDepthUpdate[oldBucket] || 0) - 1);
            scrollDepthUpdate[scrollBucket] = (scrollDepthUpdate[scrollBucket] || 0) + 1;
          }
        }

        // Calculate focus time delta
        const focusTimeDelta = focusTime - journal.lastSyncedFocusTime;

        await setDoc(engagementRef, {
          totalTimeOnPage: current.totalTimeOnPage + timeDelta,
          totalFocusTime: current.totalFocusTime + Math.max(0, focusTimeDelta),
          sessions: journal.sessionCounted ? current.sessions : current.sessions + 1,
          scrollDepth: scrollDepthUpdate,
          sectionsViewed: sectionsUpdate,
        });

        // Update tracking
        journal.lastSyncedScroll = journal.maxScroll;
        journal.lastSyncedTime = totalTime;
        journal.lastSyncedFocusTime = focusTime;
        journal.sessionCounted = true;

        // Sync device info once
        if (!journal.deviceSynced) {
          journal.deviceSynced = true;
          const devicesRef = doc(db, 'stats', 'devices');
          const devSnap = await getDoc(devicesRef);
          const devCurrent = devSnap.exists() ? devSnap.data() : { types: {}, browsers: {} };
          const device = getDeviceType();
          const browser = getBrowser();

          await setDoc(devicesRef, {
            types: { ...devCurrent.types, [device]: (devCurrent.types[device] || 0) + 1 },
            browsers: { ...devCurrent.browsers, [browser]: (devCurrent.browsers[browser] || 0) + 1 },
          });
        }

        console.log('✅ Synced');
      } catch (error) {
        console.error('❌ Sync error:', error);
      }
    };

    // Initial sync after 2 seconds
    initialSyncId = setTimeout(() => syncToFirebase(false), 2000);

    // Periodic sync every 30 seconds
    syncIntervalId = setInterval(() => syncToFirebase(false), 30000);

    // Final sync on page leave
    const handleUnload = () => syncToFirebase(true);
    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('pagehide', handleUnload);

    // No cleanup - intervals persist until page close
    // This is intentional to survive React StrictMode remounts
  }, []);
};

// ========== HELPER FUNCTIONS ==========
async function trackVisit() {
  if (sessionStorage.getItem('visited')) return;
  sessionStorage.setItem('visited', 'true');

  try {
    let visitorId = localStorage.getItem('vid');
    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem('vid', visitorId);
    }

    const visitorRef = doc(db, 'visitors', visitorId);
    const statsRef = doc(db, 'stats', 'visitors');

    await runTransaction(db, async (tx) => {
      const vSnap = await tx.get(visitorRef);
      const sSnap = await tx.get(statsRef);
      const stats = sSnap.exists() ? sSnap.data() : { uniqueVisitors: 0, totalVisits: 0 };

      if (!vSnap.exists()) {
        tx.set(visitorRef, {
          firstVisit: new Date().toISOString(),
          lastVisit: new Date().toISOString(),
          visits: 1,
          device: getDeviceType(),
          browser: getBrowser(),
        });
        tx.set(statsRef, {
          uniqueVisitors: stats.uniqueVisitors + 1,
          totalVisits: stats.totalVisits + 1,
        });
      } else {
        tx.update(visitorRef, {
          lastVisit: new Date().toISOString(),
          visits: (vSnap.data().visits || 0) + 1,
        });
        tx.set(statsRef, {
          uniqueVisitors: stats.uniqueVisitors,
          totalVisits: stats.totalVisits + 1,
        });
      }
    });

    console.log('✅ Visit tracked');
  } catch (error) {
    console.error('❌ Visit error:', error);
  }
}

async function saveProjectClick(name) {
  try {
    const ref = doc(db, 'stats', 'projects');
    const snap = await getDoc(ref);
    const data = snap.exists() ? snap.data() : {};
    await setDoc(ref, { ...data, [name]: (data[name] || 0) + 1 });
  } catch (error) {
    console.error('❌ Click error:', error);
  }
}

export default useAnalytics;
