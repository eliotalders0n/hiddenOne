import { Box, VStack, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/root' },
  { name: 'Analytics', path: '/root/analytics' },
  { name: 'Projects', path: '/root/projects' },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      w="250px"
      bg="#222222"
      color="white"
      py={8}
      display={{ base: 'none', md: 'block' }}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        px={6}
        mb={8}
        letterSpacing="0.1em"
      >
        ADMIN
      </Text>
      <VStack spacing={0} align="stretch">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== '/root' && location.pathname.startsWith(item.path));
          return (
            <ChakraLink
              as={Link}
              to={item.path}
              key={item.name}
              px={6}
              py={4}
              bg={isActive ? 'white' : 'transparent'}
              color={isActive ? '#222222' : 'white'}
              fontWeight={isActive ? 'bold' : 'medium'}
              _hover={{
                bg: isActive ? 'white' : 'whiteAlpha.200',
                textDecoration: 'none',
              }}
            >
              {item.name}
            </ChakraLink>
          );
        })}
      </VStack>
    </Box>
  );
}
