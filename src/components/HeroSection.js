import { Box, Container, Heading, Text, VStack, HStack, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const HeroSection = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      pt={{ base: 20, md: 24 }}
      pb={{ base: 16, md: 20 }}
    >
      <Container maxW="1400px">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'center' }}
          justify="space-between"
          gap={{ base: 8, lg: 16 }}
        >
          {/* Portrait - Shows first on mobile, right side on desktop */}
          <MotionBox
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            maxW={{ base: "280px", md: "380px", lg: "540px" }}
            order={{ base: 1, lg: 2 }}
            w="full"
          >
            <Box
              w="full"
              borderRadius="18px"
              overflow="hidden"
            >
              <Image
                src="/mono.png"
                alt="Pukuta Mwanza Portrait"
                w="100%"
                h="auto"
                objectFit="cover"
              />
            </Box>
          </MotionBox>

          {/* Text content - Shows second on mobile, left side on desktop */}
          <VStack align="flex-start" spacing={8} flex={1} order={{ base: 2, lg: 1 }}>
            {/* Stats */}
            <HStack spacing={12} flexWrap="wrap">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
              >
                <Heading size="2xl" color="primary">
                  +15
                </Heading>
                <Text color="secondary" fontSize="sm" mt={2}>
                  Projects completed
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 0.3 }}
              >
                <Heading size="2xl" color="primary">
                  +10
                </Heading>
                <Text color="secondary" fontSize="sm" mt={2}>
                  Years experience
                </Text>
              </MotionBox>
            </HStack>

            {/* Main heading */}
            <VStack align="flex-start" spacing={4}>
              <MotionHeading
                as="h1"
                fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
                fontWeight="medium"
                color="primary"
                lineHeight={1.1}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hello
              </MotionHeading>

              <MotionText
                fontSize={{ base: 'lg', md: 'xl' }}
                color="secondary"
                maxW="600px"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                — I'm Pukuta Mwanza, a web developer & designer passionate about
                creating elegant digital experiences
              </MotionText>
            </VStack>

            {/* Scroll indicator */}
            <MotionText
              fontSize="sm"
              color="secondary"
              pt={8}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Scroll down ↓
            </MotionText>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
