import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Custom icons
const EmailIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </Icon>
);

const LinkedInIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
    />
  </Icon>
);

const GitHubIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
    />
  </Icon>
);

const ArrowIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const contactLinks = [
    {
      name: "EMAIL",
      value: "pukuta.mwanza@appsetstudio.com",
      href: "mailto:pukuta.mwanza@appsetstudio.com",
      icon: EmailIcon,
      description: "Drop me a line",
    },
    {
      name: "LINKEDIN",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pukuta-mwanza-5b11a9b8",
      icon: LinkedInIcon,
      description: "Let's connect",
    },
    {
      name: "GITHUB",
      value: "View my code",
      href: "https://github.com/eliotalders0n",
      icon: GitHubIcon,
      description: "See my work",
    },
  ];

  return (
    <Box id="contact" ref={ref}>
      {/* Hero CTA Section */}
      <Box
        ref={heroRef}
        minH="100vh"
        bg="white"
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        {/* Giant Background Text */}
        <MotionBox
          style={{ y }}
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
          zIndex={0}
          pointerEvents="none"
        >
          <Text
            fontSize={{ base: "150px", md: "300px", lg: "450px" }}
            fontWeight="900"
            color="#222222"
            opacity={0.03}
            lineHeight="0.8"
            fontFamily="'Arial Black', sans-serif"
            whiteSpace="nowrap"
          >
            HELLO
          </Text>
        </MotionBox>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <VStack spacing={8} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="#222222"
                opacity={0.5}
                letterSpacing="0.3em"
                mb={6}
              >
                04 — CONTACT
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "50px", md: "80px", lg: "120px" }}
                fontWeight="900"
                color="#222222"
                lineHeight="0.95"
                fontFamily="'Arial Black', sans-serif"
                maxW="1000px"
              >
                LET'S CREATE
                <br />
                <Text
                  as="span"
                  color="white"
                  style={{ WebkitTextStroke: "2px #222222" }}
                >
                  SOMETHING
                </Text>
                <br />
                AMAZING
              </Heading>
            </MotionBox>

            <MotionText
              fontSize={{ base: "lg", md: "xl" }}
              color="#222222"
              opacity={0.6}
              maxW="600px"
              lineHeight="tall"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 0.6, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm always excited to collaborate on new and innovative projects.
              Whether you're starting from scratch or refining an existing idea,
              let's make it happen.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              pt={4}
            >
              <Link
                href="mailto:pukuta.mwanza@appsetstudio.com"
                display="inline-flex"
                alignItems="center"
                gap={4}
                px={10}
                py={5}
                bg="#222222"
                color="white"
                borderRadius="full"
                fontWeight="bold"
                fontSize="lg"
                letterSpacing="0.1em"
                textTransform="uppercase"
                _hover={{
                  transform: "scale(1.05)",
                  textDecoration: "none",
                }}
                transition="all 0.3s"
              >
                GET IN TOUCH
                <ArrowIcon boxSize={5} />
              </Link>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Contact Links Section */}
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
          fontSize={{ base: "100px", md: "200px", lg: "300px" }}
          fontWeight="900"
          color="white"
          opacity={0.02}
          whiteSpace="nowrap"
          fontFamily="'Arial Black', sans-serif"
          pointerEvents="none"
        >
          CONNECT
        </Text>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={0}
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
          >
            {contactLinks.map((link, index) => (
              <MotionBox
                key={link.name}
                flex="1"
                borderRight={{ lg: index < 2 ? "1px solid" : "none" }}
                borderBottom={{
                  base: index < 2 ? "1px solid" : "none",
                  lg: "none",
                }}
                borderColor="whiteAlpha.200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  display="block"
                  role="group"
                >
                  <VStack
                    align="flex-start"
                    p={{ base: 8, md: 12 }}
                    spacing={6}
                    transition="all 0.3s"
                    _groupHover={{ bg: "blackAlpha.400" }}
                  >
                    <HStack justify="space-between" w="full">
                      <Box
                        p={4}
                        border="2px solid"
                        borderColor="white"
                        borderRadius="full"
                        transition="all 0.3s"
                        _groupHover={{ bg: "white" }}
                      >
                        <link.icon
                          boxSize={6}
                          color="white"
                          transition="all 0.3s"
                          _groupHover={{ color: "#222222" }}
                        />
                      </Box>
                      <Text
                        fontSize="4xl"
                        color="white"
                        opacity={0}
                        transform="translateX(-10px)"
                        transition="all 0.3s"
                        _groupHover={{ opacity: 1, transform: "translateX(0)" }}
                      >
                        →
                      </Text>
                    </HStack>

                    <VStack align="flex-start" spacing={2}>
                      <Text
                        fontSize="xs"
                        color="white"
                        opacity={0.5}
                        letterSpacing="0.2em"
                        fontWeight="bold"
                      >
                        {link.name}
                      </Text>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="900"
                        color="white"
                        fontFamily="'Arial Black', sans-serif"
                        transition="all 0.3s"
                        _groupHover={{ pl: 2 }}
                      >
                        {link.description}
                      </Text>
                      <Text
                        fontSize="sm"
                        color="white"
                        opacity={0.6}
                        wordBreak="break-all"
                      >
                        {link.value}
                      </Text>
                    </VStack>
                  </VStack>
                </Link>
              </MotionBox>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Large Email CTA */}
      <Box
        bg="white"
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1400px">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="mailto:pukuta.mwanza@appsetstudio.com"
              _hover={{ textDecoration: "none" }}
              display="block"
              role="group"
            >
              <VStack spacing={4}>
                <Text
                  fontSize="sm"
                  color="#222222"
                  opacity={0.5}
                  letterSpacing="0.2em"
                  fontWeight="bold"
                >
                  SAY HELLO AT
                </Text>
                <Heading
                  fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
                  fontWeight="900"
                  color="#222222"
                  fontFamily="'Arial Black', sans-serif"
                  textAlign="center"
                  transition="all 0.3s"
                  _groupHover={{ letterSpacing: "0.05em" }}
                  wordBreak="break-all"
                >
                  PUKUTA.MWANZA@APPSETSTUDIO.COM
                </Heading>
                <Box
                  w="60px"
                  h="2px"
                  bg="#222222"
                  transition="all 0.3s"
                  _groupHover={{ w: "120px" }}
                />
              </VStack>
            </Link>
          </MotionBox>
        </Container>
      </Box>

      {/* Availability Banner */}
      <Box bg="#222222" py={6} overflow="hidden">
        <MotionBox
          display="flex"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <HStack key={i} spacing={8} px={8} flexShrink={0}>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="900"
                color="white"
                fontFamily="'Arial Black', sans-serif"
                whiteSpace="nowrap"
              >
                AVAILABLE FOR PROJECTS
              </Text>
              <Text fontSize="xl" color="white">
                ✦
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="900"
                color="white"
                fontFamily="'Arial Black', sans-serif"
                whiteSpace="nowrap"
                style={{
                  WebkitTextStroke: "1px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                LET'S COLLABORATE
              </Text>
              <Text fontSize="xl" color="white">
                ✦
              </Text>
            </HStack>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default ContactSection;
