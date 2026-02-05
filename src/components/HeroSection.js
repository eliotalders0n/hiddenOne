import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const greetings = [
  "HELLO", // English
  "HOLA", // Spanish
  "BONJOUR", // French
  "CIAO", // Italian
  "HALLO", // German
  "OLÁ", // Portuguese
  "ПРИВЕТ", // Russian
  "你好", // Chinese
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "مرحبا", // Arabic
  "JAMBO", // Swahili
  "SAWU' BONA", // Zulu
  "BWANJI", // Chichewa
];

const statSets = [
  [
    { value: "50+", label: "Projects" },
    { value: "10+", label: "Years Exp." },
  ],
  [
    { value: "10K+", label: "Coding Hours" },
    { value: "12+", label: "Languages" },
  ],
  [
    { value: "5K+", label: "Git Commits" },
    { value: "∞", label: "Coffee Cups" },
  ],
  [
    { value: "30+", label: "APIs Built" },
    { value: "8+", label: "Databases" },
  ],
  [
    { value: "25+", label: "Happy Clients" },
    { value: "5+", label: "Countries" },
  ],
  [
    { value: "15+", label: "Frameworks" },
    { value: "10+", label: "Open Source" },
  ],
  [
    { value: "99%", label: "Uptime" },
    { value: "24/7", label: "Debugging" },
  ],
];

const HeroSection = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [statsIndex, setStatsIndex] = useState(0);

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    const statsInterval = setInterval(() => {
      setStatsIndex((prev) => (prev + 1) % statSets.length);
    }, 5000);

    return () => {
      clearInterval(greetingInterval);
      clearInterval(statsInterval);
    };
  }, []);
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="white"
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: "100px" }}
    >
      {/* Giant Background Text */}
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex={0}
        pointerEvents="none"
      >
        <AnimatePresence mode="wait">
          <MotionText
            key={greetingIndex}
            fontSize={{ base: "150px", md: "300px", lg: "400px" }}
            fontWeight="900"
            color="#222222"
            opacity={0.03}
            lineHeight="0.8"
            fontFamily="'Arial Black', sans-serif"
            whiteSpace="nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.03, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {greetings[greetingIndex]}
          </MotionText>
        </AnimatePresence>
      </Box>

      <Container maxW="1400px" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, lg: 16 }}
        >
          {/* Portrait - Large Image */}
          <MotionBox
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            maxW={{ base: "350px", md: "450px", lg: "550px" }}
            order={{ base: 1, lg: 2 }}
            w="full"
          >
            <Box w="full" position="relative">
              {/* Image container with border effect */}
              <Box position="relative" borderRadius="3xl" overflow="hidden">
                <Image
                  src="/mono.png"
                  alt="Pukuta Mwanza Portrait"
                  w="100%"
                  h="auto"
                  objectFit="cover"
                />

                {/* Corner accent */}
                <Box
                  position="absolute"
                  bottom={-2}
                  right={-2}
                  w="100px"
                  h="100px"
                  bg="#222222"
                  zIndex={-1}
                />
              </Box>
            </Box>
          </MotionBox>

          {/* Text content */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={8}
            flex={1}
            order={{ base: 2, lg: 1 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {/* Stats */}
            <HStack
              spacing={{ base: 8, md: 12 }}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
              minH={{ base: "100px", md: "120px" }}
            >
              <AnimatePresence mode="wait">
                <MotionBox
                  key={statsIndex}
                  display="flex"
                  gap={{ base: 8, md: 12 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {statSets[statsIndex].map((stat, idx) => (
                    <Box key={idx}>
                      <Text
                        fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
                        fontWeight="900"
                        color="#222222"
                        lineHeight="0.9"
                        fontFamily="'Arial Black', sans-serif"
                      >
                        {stat.value}
                      </Text>
                      <Text
                        color="#222222"
                        opacity={0.5}
                        fontSize="sm"
                        mt={2}
                        fontWeight="bold"
                        letterSpacing="0.1em"
                        textTransform="uppercase"
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </MotionBox>
              </AnimatePresence>
            </HStack>

            {/* Main heading */}
            <VStack align={{ base: "center", lg: "flex-start" }} spacing={4}>
              <Box
                overflow="hidden"
                minH={{ base: "70px", md: "100px", lg: "140px" }}
              >
                <AnimatePresence mode="wait">
                  <MotionHeading
                    key={greetingIndex}
                    as="h1"
                    fontSize={{ base: "70px", md: "100px", lg: "140px" }}
                    fontWeight="900"
                    color="#222222"
                    lineHeight="0.9"
                    fontFamily="'Arial Black', sans-serif"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    {greetings[greetingIndex]}
                  </MotionHeading>
                </AnimatePresence>
              </Box>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="900"
                  color="#222222"
                  fontFamily="'Arial Black', sans-serif"
                >
                  I'M{" "}
                  <Text
                    as="span"
                    color="white"
                    style={{ WebkitTextStroke: "2px #222222" }}
                  >
                    PUKUTA
                  </Text>
                </Text>
              </MotionBox>

              <MotionText
                fontSize={{ base: "md", md: "lg" }}
                color="#222222"
                opacity={0.6}
                maxW="500px"
                lineHeight="tall"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A web developer & designer passionate about creating elegant
                digital experiences that make a difference.
              </MotionText>
            </VStack>

            {/* CTA and scroll */}
            <HStack
              spacing={6}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Box
                  as="a"
                  href="#contact"
                  bg="#222222"
                  color="white"
                  px={8}
                  py={4}
                  borderRadius="full"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  display="inline-block"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="all 0.3s"
                >
                  Get in Touch
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Box
                  as="a"
                  href="#portfolio"
                  border="2px solid"
                  borderColor="#222222"
                  color="#222222"
                  px={8}
                  py={4}
                  borderRadius="full"
                  fontWeight="bold"
                  fontSize="sm"
                  letterSpacing="0.1em"
                  textTransform="uppercase"
                  display="inline-block"
                  _hover={{ bg: "#222222", color: "white" }}
                  transition="all 0.3s"
                >
                  View Work
                </Box>
              </MotionBox>
            </HStack>

            {/* Scroll indicator */}
            <MotionBox
              pt={4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <VStack spacing={2}>
                <Text
                  fontSize="xs"
                  color="#222222"
                  opacity={0.5}
                  fontWeight="bold"
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                >
                  Scroll
                </Text>
                <MotionBox
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Text fontSize="xl" color="#222222">
                    ↓
                  </Text>
                </MotionBox>
              </VStack>
            </MotionBox>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
