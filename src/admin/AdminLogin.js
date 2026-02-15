import { Flex, VStack, Input, Button, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';

const ADMIN_PASSWORD = 'admin123';

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_auth', 'true');
      onLogin();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="white">
      <form onSubmit={handleLogin}>
        <VStack spacing={6} p={8} maxW="400px" w="full">
          <Heading color="#222222" size="lg">
            Admin Access
          </Heading>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderColor="#222222"
            _focus={{ borderColor: '#222222', boxShadow: 'none' }}
          />
          {error && (
            <Text color="red.500" fontSize="sm">
              {error}
            </Text>
          )}
          <Button
            type="submit"
            w="full"
            bg="#222222"
            color="white"
            _hover={{ bg: '#7B7B7B' }}
          >
            Login
          </Button>
        </VStack>
      </form>
    </Flex>
  );
}
