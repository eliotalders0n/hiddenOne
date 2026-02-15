import { Box, Text, VStack } from '@chakra-ui/react';

export default function StatCard({ label, value, description }) {
  return (
    <Box
      p={6}
      bg="#F8F8F8"
      borderRadius="lg"
      border="1px solid"
      borderColor="#E0E0E0"
    >
      <VStack align="start" spacing={2}>
        <Text
          fontSize="sm"
          color="#7B7B7B"
          textTransform="uppercase"
          letterSpacing="0.1em"
        >
          {label}
        </Text>
        <Text fontSize="4xl" fontWeight="bold" color="#222222">
          {value}
        </Text>
        {description && (
          <Text fontSize="sm" color="#7B7B7B">
            {description}
          </Text>
        )}
      </VStack>
    </Box>
  );
}
