import { useEffect, useRef } from 'react';
import { db } from '../firebase_config';
import {
  doc,
  setDoc,
  getDoc,
  runTransaction,
} from 'firebase/firestore';

// Generate a unique visitor ID
const generateVisitorId = () => {
  const nav = window.navigator;
  const scr = window.screen;

  // Create a fingerprint from browser/device info
  const fingerprint = [
    nav.userAgent,
    nav.language,
    scr.width,
    scr.height,
    scr.colorDepth,
    new Date().getTimezoneOffset(),
  ].join('|');

  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return 'visitor_' + Math.abs(hash).toString(36);
};

export const useVisitorTracking = () => {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Prevent double execution from StrictMode
    if (hasTracked.current) return;

    const trackVisitor = async () => {
      try {
        // Check if already tracked in this session
        const sessionTracked = sessionStorage.getItem('visitor_tracked');
        if (sessionTracked) return;

        // Mark as tracking immediately to prevent race conditions
        hasTracked.current = true;
        sessionStorage.setItem('visitor_tracked', 'true');

        // Get or create visitor ID
        let visitorId = localStorage.getItem('visitor_id');
        const isNewVisitor = !visitorId;

        if (!visitorId) {
          visitorId = generateVisitorId();
          localStorage.setItem('visitor_id', visitorId);
        }

        const visitorRef = doc(db, 'visitors', visitorId);
        const statsRef = doc(db, 'stats', 'visitors');

        // Use transaction to ensure atomic updates
        await runTransaction(db, async (transaction) => {
          const visitorSnap = await transaction.get(visitorRef);
          const statsSnap = await transaction.get(statsRef);

          const currentStats = statsSnap.exists()
            ? statsSnap.data()
            : { uniqueVisitors: 0, totalVisits: 0 };

          if (!visitorSnap.exists()) {
            // New unique visitor
            transaction.set(visitorRef, {
              firstVisit: new Date().toISOString(),
              lastVisit: new Date().toISOString(),
              visits: 1,
              userAgent: navigator.userAgent,
              language: navigator.language,
              screenSize: `${window.screen.width}x${window.screen.height}`,
            });

            transaction.set(statsRef, {
              uniqueVisitors: currentStats.uniqueVisitors + 1,
              totalVisits: currentStats.totalVisits + 1,
            });
          } else {
            // Returning visitor
            const visitorData = visitorSnap.data();
            transaction.update(visitorRef, {
              lastVisit: new Date().toISOString(),
              visits: (visitorData.visits || 0) + 1,
            });

            transaction.set(statsRef, {
              uniqueVisitors: currentStats.uniqueVisitors,
              totalVisits: currentStats.totalVisits + 1,
            });
          }
        });
      } catch (error) {
        console.error('Error tracking visitor:', error);
        // Reset on error so it can retry
        hasTracked.current = false;
        sessionStorage.removeItem('visitor_tracked');
      }
    };

    trackVisitor();
  }, []);
};

export default useVisitorTracking;
