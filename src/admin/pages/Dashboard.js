import { Box, Heading, SimpleGrid, Spinner, Text, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase_config';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import StatCard from '../components/StatCard';

// Format seconds to readable time
const formatTime = (seconds) => {
  if (seconds < 0) return '0s';
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins < 60) return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours}h ${remainingMins}m`;
};

export default function Dashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    categories: [],
    uniqueVisitors: 0,
    totalVisits: 0,
  });
  const [engagement, setEngagement] = useState(null);
  const [topProject, setTopProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time listener for visitor stats
    const visitorStatsRef = doc(db, 'stats', 'visitors');
    const unsubscribeVisitors = onSnapshot(visitorStatsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStats((prev) => ({
          ...prev,
          uniqueVisitors: data.uniqueVisitors || 0,
          totalVisits: data.totalVisits || 0,
        }));
      }
      setLoading(false);
    });

    // Real-time listener for projects
    const projectsRef = collection(db, 'projects');
    const unsubscribeProjects = onSnapshot(projectsRef, (snapshot) => {
      const categories = new Set();
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        if (data.category) categories.add(data.category);
      });
      setStats((prev) => ({
        ...prev,
        projects: snapshot.size,
        categories: Array.from(categories),
      }));
    });

    // Real-time listener for engagement
    const engagementRef = doc(db, 'stats', 'engagement');
    const unsubscribeEngagement = onSnapshot(engagementRef, (docSnap) => {
      if (docSnap.exists()) {
        setEngagement(docSnap.data());
      }
    });

    // Real-time listener for project clicks
    const projectClicksRef = doc(db, 'stats', 'projects');
    const unsubscribeClicks = onSnapshot(projectClicksRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
        if (sorted.length > 0) {
          setTopProject({ name: sorted[0][0], clicks: sorted[0][1] });
        }
      }
    });

    // Cleanup listeners on unmount
    return () => {
      unsubscribeVisitors();
      unsubscribeProjects();
      unsubscribeEngagement();
      unsubscribeClicks();
    };
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" color="#222222" />
      </Box>
    );
  }

  const avgTimeOnPage = engagement?.sessions > 0
    ? Math.round(engagement.totalTimeOnPage / engagement.sessions)
    : 0;

  return (
    <Box>
      <HStack justify="space-between" mb={8}>
        <Heading size="lg" color="#222222">
          Dashboard
        </Heading>
        <ChakraLink
          as={Link}
          to="/root/analytics"
          fontSize="sm"
          color="#7B7B7B"
          _hover={{ color: '#222222' }}
        >
          View detailed analytics →
        </ChakraLink>
      </HStack>

      <Text fontSize="sm" color="#7B7B7B" mb={4} textTransform="uppercase" letterSpacing="0.1em">
        Visitor Analytics
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
        <StatCard
          label="Unique Visitors"
          value={stats.uniqueVisitors.toLocaleString()}
          description="All time"
        />
        <StatCard
          label="Total Visits"
          value={stats.totalVisits.toLocaleString()}
          description="Page views"
        />
        <StatCard
          label="Avg. Time on Page"
          value={formatTime(avgTimeOnPage)}
          description="Per session"
        />
        <StatCard
          label="Sessions"
          value={engagement?.sessions?.toLocaleString() || 0}
          description="Tracked sessions"
        />
      </SimpleGrid>

      <Text fontSize="sm" color="#7B7B7B" mb={4} textTransform="uppercase" letterSpacing="0.1em">
        Content Stats
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        <StatCard
          label="Total Projects"
          value={stats.projects}
          description="Published projects"
        />
        <StatCard
          label="Categories"
          value={stats.categories.length}
          description={stats.categories.slice(0, 3).join(', ')}
        />
        <StatCard
          label="Top Project"
          value={topProject?.name || '—'}
          description={topProject ? `${topProject.clicks} clicks` : 'No clicks yet'}
        />
        <StatCard
          label="Avg. Visits/User"
          value={
            stats.uniqueVisitors > 0
              ? (stats.totalVisits / stats.uniqueVisitors).toFixed(1)
              : '0'
          }
          description="Return rate"
        />
      </SimpleGrid>
    </Box>
  );
}
