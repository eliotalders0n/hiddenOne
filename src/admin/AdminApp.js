import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminHeader from './components/AdminHeader';
import AdminLogin from './AdminLogin';
import Dashboard from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import ProjectForm from './pages/ProjectForm';
import Analytics from './pages/Analytics';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Flex minH="100vh" bg="white">
      <AdminSidebar />
      <Box flex="1" ml={{ base: 0, md: '250px' }}>
        <AdminHeader
          onLogout={() => {
            localStorage.removeItem('admin_auth');
            setIsAuthenticated(false);
          }}
        />
        <Box p={8} pt="80px">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="projects" element={<ProjectList />} />
            <Route path="projects/new" element={<ProjectForm />} />
            <Route path="projects/:id/edit" element={<ProjectForm />} />
            <Route path="*" element={<Navigate to="/root" replace />} />
          </Routes>
        </Box>
      </Box>
    </Flex>
  );
}
