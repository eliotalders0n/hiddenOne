import { Flex, Text, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function AdminHeader({ onLogout }) {
  return (
    <Flex
      position="fixed"
      top={0}
      right={0}
      left={{ base: 0, md: '250px' }}
      h="60px"
      bg="#F8F8F8"
      borderBottom="1px solid"
      borderColor="#E0E0E0"
      align="center"
      justify="space-between"
      px={6}
      zIndex={100}
    >
      <HStack spacing={4}>
        <Text
          as={Link}
          to="/"
          fontSize="sm"
          color="#7B7B7B"
          _hover={{ color: '#222222' }}
        >
          View Site
        </Text>
      </HStack>
      <Button
        size="sm"
        variant="outline"
        borderColor="#222222"
        color="#222222"
        onClick={onLogout}
        _hover={{ bg: '#222222', color: 'white' }}
      >
        Logout
      </Button>
    </Flex>
  );
}
