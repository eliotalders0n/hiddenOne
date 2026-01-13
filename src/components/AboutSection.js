import { Box, Container, Heading, Text, SimpleGrid, VStack, Flex, Image } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.6 },
    },
  };

  return (
    <Box
      id="about"
      py={{ base: 20, md: 32 }}
      bg="tertiary"
      ref={ref}
    >
      <Container maxW="1400px">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 20 }}>
            {/* Left side - About text */}
            <MotionBox variants={itemVariants}>
              <VStack align="flex-start" spacing={6}>
                <Heading
                  as="h2"
                  fontSize={{ base: '4xl', md: '5xl' }}
                  fontWeight="medium"
                  color="primary"
                >
                  About Me
                </Heading>

                <Text fontSize="lg" color="secondary" lineHeight="tall">
                  I'm specialize in turning complex problems into elegant
                  solutions. My approach blends creativity with strategic thinking
                  to deliver designs that not only look great but work seamlessly.
                  Ready to start your next project?
                </Text>

                <Text fontSize="lg" color="secondary" lineHeight="tall" pt={4}>
                  With 15+ years of experience, I specialize in creating
                  intuitive, user-focused web experiences that solve real-world
                  problems and deliver seamless digital solutions.
                </Text>

                <Text fontSize="lg" color="secondary" lineHeight="tall">
                  I thrive on working closely with clients, blending creativity
                  with strategy to bring their vision to life through thoughtful,
                  impactful web solutions.
                </Text>
              </VStack>
            </MotionBox>

            {/* Right side - Stats and images */}
            <MotionBox variants={itemVariants}>
              <VStack spacing={8}>
                {/* Stat card */}
                <Flex
                  bg="white"
                  p={8}
                  borderRadius="2xl"
                  w="full"
                  direction="column"
                  gap={4}
                >
                  <Box>
                    <Heading size="2xl" color="primary">
                      150%
                    </Heading>
                  </Box>
                  <Text color="secondary" fontSize="md">
                    Average increase in client engagement in the first 6 months
                  </Text>
                </Flex>

                {/* Image grid */}
                <SimpleGrid columns={2} spacing={4} w="full">
                  <Box
                    h="230px"
                    borderRadius="2xl"
                    overflow="hidden"
                  >
                    <Image
                      src="/Screenshot 2026-01-13 at 12.17.41 PM.png"
                      alt="Work Sample 1"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                  <Box
                    h="230px"
                    borderRadius="2xl"
                    overflow="hidden"
                  >
                    <Image
                      src="/Screenshot 2026-01-13 at 12.21.07 PM.png"
                      alt="Work Sample 2"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                </SimpleGrid>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AboutSection;
