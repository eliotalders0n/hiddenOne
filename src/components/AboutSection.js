import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
  Image,
  Badge,
} from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yearY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const stats = [
    { number: "10+", label: "YEARS EXPERIENCE" },
    { number: "50+", label: "PROJECTS COMPLETED" },
    { number: "30+", label: "HAPPY CLIENTS" },
  ];

  return (
    <Box id="about" ref={ref}>
      {/* Hero Section - Full Viewport */}
      <Box
        ref={heroRef}
        minH="100vh"
        bg="white"
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        {/* Giant Background 1996 */}
        <MotionBox
          style={{ y: yearY }}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          zIndex={0}
          pointerEvents="none"
        >
          <Text
            fontSize={{ base: "250px", md: "400px", lg: "600px" }}
            fontWeight="900"
            color="#222222"
            opacity={0.03}
            lineHeight="0.8"
            fontFamily="'Arial Black', sans-serif"
            whiteSpace="nowrap"
          >
            1996
          </Text>
        </MotionBox>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 12, lg: 20 }}
            align="center"
          >
            {/* Left Side - Content */}
            <VStack
              flex="1"
              align={{ base: "center", lg: "flex-start" }}
              spacing={8}
              textAlign={{ base: "center", lg: "left" }}
            >
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Badge
                  bg="#222222"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  ● About Me
                </Badge>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "60px", md: "100px", lg: "130px" }}
                  fontWeight="900"
                  color="#222222"
                  lineHeight="0.9"
                  fontFamily="'Arial Black', sans-serif"
                >
                  CREATIVE
                  <br />
                  <Text
                    as="span"
                    color="white"
                    style={{ WebkitTextStroke: "2px #222222" }}
                  >
                    DEVELOPER
                  </Text>
                </Heading>
              </MotionBox>

              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color="#222222"
                opacity={0.7}
                lineHeight="tall"
                maxW="500px"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 0.7, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I specialize in turning complex problems into elegant solutions.
                My approach blends creativity with strategic thinking to deliver
                designs that not only look great but work seamlessly.
              </MotionText>

              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                color="#222222"
                opacity={0.7}
                lineHeight="tall"
                maxW="500px"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 0.7, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                With 10+ years of experience, I thrive on working closely with
                clients, blending creativity with strategy to bring your vision
                to life through thoughtful and impactful solutions.
              </MotionText>
            </VStack>

            {/* Right Side - Image */}
            <MotionBox
              flex="1"
              style={{ y }}
              maxW={{ base: "100%", lg: "500px" }}
            >
              <Box
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                bg="#222222"
              >
                <Image
                  src="/me2.png"
                  alt="Pukuta Mwanza"
                  w="100%"
                  h={{ base: "400px", md: "500px", lg: "600px" }}
                  objectFit="cover"
                />

                {/* Overlay gradient */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="30%"
                  bgGradient="linear(to-t, #222222, transparent)"
                />

                {/* Name overlay */}
                <Box position="absolute" bottom={8} left={8} right={8}>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="900"
                    color="white"
                    fontFamily="'Arial Black', sans-serif"
                  >
                    PUKUTA MWANZA
                  </Text>
                  <Text
                    fontSize="sm"
                    color="white"
                    opacity={0.7}
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                  >
                    Full Stack Developer & Designer
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        bg="#222222"
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        {/* Background Text */}
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "150px", md: "250px", lg: "350px" }}
          fontWeight="900"
          color="white"
          opacity={0.03}
          whiteSpace="nowrap"
          fontFamily="'Arial Black', sans-serif"
          pointerEvents="none"
        >
          STATS
        </Text>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            align="center"
            gap={{ base: 12, md: 8 }}
          >
            {stats.map((stat, index) => (
              <MotionBox
                key={index}
                textAlign="center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Text
                  fontSize={{ base: "80px", md: "100px", lg: "150px" }}
                  fontWeight="900"
                  color="white"
                  lineHeight="0.9"
                  fontFamily="'Arial Black', sans-serif"
                >
                  {stat.number}
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="white"
                  opacity={0.5}
                  letterSpacing="0.2em"
                  fontWeight="bold"
                  mt={2}
                >
                  {stat.label}
                </Text>
              </MotionBox>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Philosophy Section */}
      <Box
        minH={{ base: "auto", lg: "100vh" }}
        bg="white"
        py={{ base: 20, lg: 0 }}
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        {/* Background Text */}
        <Text
          position="absolute"
          top="50%"
          right="-10%"
          transform="translateY(-50%)"
          fontSize={{ base: "200px", md: "300px", lg: "400px" }}
          fontWeight="900"
          color="#222222"
          opacity={0.03}
          lineHeight="0.8"
          fontFamily="'Arial Black', sans-serif"
          pointerEvents="none"
          writingMode="vertical-rl"
        >
          THINK
        </Text>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 12, lg: 20 }}
            align="center"
          >
            {/* Left - Big Quote */}
            <VStack
              flex="1"
              align={{ base: "center", lg: "flex-start" }}
              spacing={6}
            >
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Text
                  fontSize={{ base: "100px", md: "150px", lg: "200px" }}
                  fontWeight="900"
                  color="#222222"
                  lineHeight="0.8"
                  fontFamily="'Arial Black', sans-serif"
                >
                  "
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                  fontWeight="900"
                  color="#222222"
                  lineHeight="1.2"
                  fontFamily="'Arial Black', sans-serif"
                  maxW="600px"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  DESIGN IS NOT JUST WHAT IT LOOKS LIKE. DESIGN IS HOW IT WORKS.
                </Heading>
              </MotionBox>

              <MotionText
                fontSize="lg"
                color="#222222"
                opacity={0.5}
                letterSpacing="0.1em"
                fontWeight="bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                — MY PHILOSOPHY
              </MotionText>
            </VStack>

            {/* Right - Skills */}
            <VStack
              flex="1"
              align={{ base: "center", lg: "flex-start" }}
              spacing={6}
            >
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="#222222"
                  opacity={0.5}
                  letterSpacing="0.2em"
                  fontWeight="bold"
                  mb={4}
                >
                  WHAT I DO
                </Text>
              </MotionBox>

              {[
                "WEB DEVELOPMENT",
                "UI/UX DESIGN",
                "MOBILE APPS",
                "CLOUD SOLUTIONS",
              ].map((skill, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  w="full"
                  maxW="400px"
                >
                  <HStack
                    justify="space-between"
                    py={4}
                    borderBottom="2px solid"
                    borderColor="#222222"
                    _hover={{ pl: 4 }}
                    transition="all 0.3s"
                    cursor="default"
                  >
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="900"
                      color="#222222"
                      fontFamily="'Arial Black', sans-serif"
                    >
                      {skill}
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" color="#222222">
                      →
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutSection;
