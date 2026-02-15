import {
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  HStack,
  Progress,
  Flex,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase_config';
import { doc, onSnapshot } from 'firebase/firestore';
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

// Capitalize section names nicely
const formatSection = (name) => {
  const labels = {
    hero: 'Hero',
    about: 'About',
    portfolio: 'Portfolio',
    experience: 'Experience',
    contact: 'Contact',
  };
  return labels[name] || name.charAt(0).toUpperCase() + name.slice(1);
};

// Simple bar component for charts
const Bar = ({ label, value, maxValue, color = '#222222' }) => {
  const percentage = maxValue > 0 ? (value / maxValue) * 100 : 0;
  return (
    <Box mb={3}>
      <Flex justify="space-between" mb={1}>
        <Text fontSize="sm" color="#7B7B7B">{label}</Text>
        <Text fontSize="sm" fontWeight="bold" color="#222222">{value}</Text>
      </Flex>
      <Progress
        value={percentage}
        size="sm"
        borderRadius="full"
        bg="#F8F8F8"
        sx={{ '& > div': { bg: color } }}
      />
    </Box>
  );
};

export default function Analytics() {
  const [engagement, setEngagement] = useState(null);
  const [devices, setDevices] = useState(null);
  const [projects, setProjects] = useState(null);
  const [visitors, setVisitors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time listener for engagement stats
    const unsubEngagement = onSnapshot(doc(db, 'stats', 'engagement'), (snap) => {
      if (snap.exists()) {
        setEngagement(snap.data());
      }
      setLoading(false);
    });

    // Real-time listener for device stats
    const unsubDevices = onSnapshot(doc(db, 'stats', 'devices'), (snap) => {
      if (snap.exists()) {
        setDevices(snap.data());
      }
    });

    // Real-time listener for project clicks
    const unsubProjects = onSnapshot(doc(db, 'stats', 'projects'), (snap) => {
      if (snap.exists()) {
        setProjects(snap.data());
      }
    });

    // Real-time listener for visitor stats
    const unsubVisitors = onSnapshot(doc(db, 'stats', 'visitors'), (snap) => {
      if (snap.exists()) {
        setVisitors(snap.data());
      }
    });

    return () => {
      unsubEngagement();
      unsubDevices();
      unsubProjects();
      unsubVisitors();
    };
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" py={20}>
        <Spinner size="xl" color="#222222" />
      </Box>
    );
  }

  // Calculate averages
  const avgTimeOnPage = engagement?.sessions > 0
    ? Math.round(engagement.totalTimeOnPage / engagement.sessions)
    : 0;
  const avgFocusTime = engagement?.sessions > 0
    ? Math.round(engagement.totalFocusTime / engagement.sessions)
    : 0;

  // Get max values for charts
  const scrollDepthMax = engagement?.scrollDepth
    ? Math.max(...Object.values(engagement.scrollDepth))
    : 1;
  const sectionsMax = engagement?.sectionsViewed
    ? Math.max(...Object.values(engagement.sectionsViewed))
    : 1;
  const devicesMax = devices?.types
    ? Math.max(...Object.values(devices.types))
    : 1;
  const browsersMax = devices?.browsers
    ? Math.max(...Object.values(devices.browsers))
    : 1;
  const projectsMax = projects
    ? Math.max(...Object.values(projects))
    : 1;

  // Sort projects by clicks
  const sortedProjects = projects
    ? Object.entries(projects).sort((a, b) => b[1] - a[1])
    : [];

  return (
    <Box>
      <Heading size="lg" mb={8} color="#222222">
        Analytics
      </Heading>

      {/* Key Metrics */}
      <Text fontSize="sm" color="#7B7B7B" mb={4} textTransform="uppercase" letterSpacing="0.1em">
        Overview
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
        <StatCard
          label="Total Sessions"
          value={engagement?.sessions?.toLocaleString() || 0}
          description="Tracked sessions"
        />
        <StatCard
          label="Avg. Time on Page"
          value={formatTime(avgTimeOnPage)}
          description="Per session"
        />
        <StatCard
          label="Avg. Focus Time"
          value={formatTime(Math.max(0, avgFocusTime))}
          description="Active engagement"
        />
        <StatCard
          label="Bounce Rate"
          value={
            engagement?.scrollDepth
              ? `${Math.round((engagement.scrollDepth['0'] || 0) / (engagement.sessions || 1) * 100)}%`
              : '0%'
          }
          description="Left without scrolling"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={10}>
        {/* Scroll Depth */}
        <Box p={6} bg="white" borderRadius="lg" border="1px solid" borderColor="#E0E0E0">
          <Heading size="md" mb={6} color="#222222">Scroll Depth</Heading>
          <VStack spacing={4} align="stretch">
            <Bar label="0-24%" value={engagement?.scrollDepth?.['0'] || 0} maxValue={scrollDepthMax} color="#E84A7F" />
            <Bar label="25-49%" value={engagement?.scrollDepth?.['25'] || 0} maxValue={scrollDepthMax} color="#E5A030" />
            <Bar label="50-74%" value={engagement?.scrollDepth?.['50'] || 0} maxValue={scrollDepthMax} color="#5FBFBF" />
            <Bar label="75-99%" value={engagement?.scrollDepth?.['75'] || 0} maxValue={scrollDepthMax} color="#7B68EE" />
            <Bar label="100%" value={engagement?.scrollDepth?.['100'] || 0} maxValue={scrollDepthMax} color="#2D5A4A" />
          </VStack>
        </Box>

        {/* Section Views */}
        <Box p={6} bg="white" borderRadius="lg" border="1px solid" borderColor="#E0E0E0">
          <Heading size="md" mb={6} color="#222222">Section Views</Heading>
          <VStack spacing={4} align="stretch">
            {engagement?.sectionsViewed && Object.entries(engagement.sectionsViewed)
              .sort((a, b) => b[1] - a[1])
              .map(([section, views]) => (
                <Bar key={section} label={formatSection(section)} value={views} maxValue={sectionsMax} />
              ))}
            {!engagement?.sectionsViewed && <Text color="#7B7B7B">No data yet</Text>}
          </VStack>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mb={10}>
        {/* Device Types */}
        <Box p={6} bg="white" borderRadius="lg" border="1px solid" borderColor="#E0E0E0">
          <Heading size="md" mb={6} color="#222222">Devices</Heading>
          <VStack spacing={4} align="stretch">
            {devices?.types && Object.entries(devices.types)
              .sort((a, b) => b[1] - a[1])
              .map(([device, count]) => (
                <Bar key={device} label={device.charAt(0).toUpperCase() + device.slice(1)} value={count} maxValue={devicesMax} color="#1A2B4A" />
              ))}
            {!devices?.types && <Text color="#7B7B7B">No data yet</Text>}
          </VStack>
        </Box>

        {/* Browsers */}
        <Box p={6} bg="white" borderRadius="lg" border="1px solid" borderColor="#E0E0E0">
          <Heading size="md" mb={6} color="#222222">Browsers</Heading>
          <VStack spacing={4} align="stretch">
            {devices?.browsers && Object.entries(devices.browsers)
              .sort((a, b) => b[1] - a[1])
              .map(([browser, count]) => (
                <Bar key={browser} label={browser} value={count} maxValue={browsersMax} color="#E07B53" />
              ))}
            {!devices?.browsers && <Text color="#7B7B7B">No data yet</Text>}
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Project Clicks */}
      <Box p={6} bg="white" borderRadius="lg" border="1px solid" borderColor="#E0E0E0">
        <Heading size="md" mb={6} color="#222222">Project Clicks</Heading>
        {sortedProjects.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {sortedProjects.map(([project, clicks], index) => (
              <HStack key={project} justify="space-between" p={3} bg="#F8F8F8" borderRadius="md">
                <HStack>
                  <Text fontWeight="bold" color="#7B7B7B" w="24px">{index + 1}.</Text>
                  <Text fontWeight="medium" color="#222222">{project}</Text>
                </HStack>
                <Text fontWeight="bold" color="#222222">{clicks} clicks</Text>
              </HStack>
            ))}
          </SimpleGrid>
        ) : (
          <Text color="#7B7B7B">No project clicks recorded yet</Text>
        )}
      </Box>
    </Box>
  );
}
