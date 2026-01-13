import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box id="contact" py={{ base: 20, md: 32 }} bg="white" ref={ref}>
      <Container maxW="1400px">
        {/* Main CTA */}
        <MotionBox
          bg="primary"
          borderRadius="3xl"
          p={{ base: 12, md: 20 }}
          textAlign="center"
          mb={20}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.6 }}
        >
          <VStack spacing={6}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="medium"
              color="white"
              maxW="800px"
            >
              Got a Vision? Let's Bring It to Life!
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="white"
              opacity={0.9}
              maxW="600px"
            >
              I'm always excited to collaborate on new and innovative projects.
              Whether you're starting from scratch or refining an existing idea
            </Text>
            <Link
              href="mailto:pukuta.mwanza@appsetstudio.com"
              mt={4}
              px={8}
              py={4}
              bg="white"
              color="primary"
              borderRadius="full"
              fontWeight="medium"
              fontSize="lg"
              _hover={{ transform: 'translateY(-2px)' }}
              transition="all 0.3s"
              display="inline-flex"
              alignItems="center"
              gap={2}
            >
              Send an Email <ExternalLinkIcon />
            </Link>
          </VStack>
        </MotionBox>

        {/* Contact Info */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={8}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MotionBox
            bg="tertiary"
            p={8}
            borderRadius="2xl"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Heading size="md" color="primary" mb={2}>
              Email
            </Heading>
            <Link
              href="mailto:pukuta@example.com"
              color="secondary"
              _hover={{ color: 'primary' }}
            >
              pukuta.mwanza@appsetstudio.com
            </Link>
          </MotionBox>

          <MotionBox
            bg="tertiary"
            p={8}
            borderRadius="2xl"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Heading size="md" color="primary" mb={2}>
              LinkedIn
            </Heading>
            <Link
              href="www.linkedin.com/in/pukuta-mwanza-5b11a9b8"
              color="secondary"
              _hover={{ color: 'primary' }}
            >
              Connect with me
            </Link>
          </MotionBox>

          <MotionBox
            bg="tertiary"
            p={8}
            borderRadius="2xl"
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Heading size="md" color="primary" mb={2}>
              GitHub
            </Heading>
            <Link
              href="https://github.com/eliotalders0n"
              color="secondary"
              _hover={{ color: 'primary' }}
            >
              View my work
            </Link>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactSection;
