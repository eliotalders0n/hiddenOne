import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Box);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Freelance Web Developer',
      location: 'Remote',
      role: 'Full Stack Developer & Designer',
      period: '2025 - Present',
      description:
        'Creating custom web solutions for clients, specializing in React-based applications and modern UI/UX design.',
      skills: ['React', 'Node.js', 'Firebase', 'UI/UX'],
    },
    {
      company: 'Mine Tech',
      location: 'Zambia',
      role: 'Software Developer',
      period: '2023 - 2024',
      description:
        'Developed integrated mining solutions for Kansanshi Mine PLC',
      skills: ['Typescript', 'C#', 'Git'],
    },
    {
      company: 'Tech Startup',
      location: 'On Site',
      role: 'Web Developer',
      period: '2019 - 2020',
      description:
        'Built and maintained banking platforms, focusing on performance optimization and data integrity.',
      skills: ['Java', 'SQL', 'Grails'],
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.7 },
    },
  };

  return (
    <Box id="experience" py={{ base: 20, md: 32 }} bg="tertiary" ref={ref}>
      <Container maxW="1200px">
        <MotionBox
          mb={16}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.6 }}
        >
          <Badge
            bg="white"
            color="secondary"
            px={4}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="medium"
            mb={4}
          >
            ● Experience
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="medium"
            color="primary"
            mb={4}
          >
            Explore My Journey
          </Heading>
          <Text fontSize="lg" color="secondary" maxW="800px">
            Over the past 15+ years, I've had the opportunity to work on a wide
            range of projects, collaborating with diverse teams and clients to
            bring creative visions to life.
          </Text>
        </MotionBox>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <VStack spacing={8} align="stretch">
            {experiences.map((exp, index) => (
              <MotionBox key={index} variants={itemVariants}>
                <Flex
                  bg="white"
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  direction={{ base: 'column', md: 'row' }}
                  gap={{ base: 6, md: 12 }}
                  transition="all 0.3s"
                  _hover={{ transform: 'translateX(8px)' }}
                >
                  {/* Left side - Company and period */}
                  <VStack
                    align="flex-start"
                    spacing={2}
                    minW={{ md: '250px' }}
                  >
                    <Heading
                      size="md"
                      color="primary"
                      fontWeight="medium"
                    >
                      {exp.company}
                    </Heading>
                    <Text color="secondary" fontSize="sm">
                      • {exp.period}
                    </Text>
                    <Text color="secondary" fontSize="sm">
                      {exp.location}
                    </Text>
                  </VStack>

                  {/* Right side - Role and description */}
                  <VStack align="flex-start" spacing={4} flex={1}>
                    <Text
                      fontSize="lg"
                      fontWeight="medium"
                      color="primary"
                    >
                      {exp.role}
                    </Text>
                    <Text color="secondary" lineHeight="tall">
                      {exp.description}
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {exp.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          bg="tertiary"
                          color="secondary"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </Flex>
              </MotionBox>
            ))}
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
