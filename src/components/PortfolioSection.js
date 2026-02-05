import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Badge,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Bold color palette inspired by the reference
  const colors = {
    mustard: "#E5A030",
    red: "#D94A4A",
    teal: "#5FBFBF",
    navy: "#1A2B4A",
    white: "#FFFFFF",
    black: "#222222",
    coral: "#E07B53",
    purple: "#7B68EE",
    forest: "#2D5A4A",
    pink: "#E84A7F",
  };

  // All projects with full stories and bold styling
  const allProjects = [
    {
      number: "01",
      title: "Ngwee",
      tagline: "REDEFINING MUSIC OWNERSHIP",
      description: "Buy and Sell limited edition music",
      story:
        "Ngwee is a revolutionary platform that brings the concept of limited edition releases to digital music. Artists can mint exclusive tracks, and fans can own, trade, and collect rare musical pieces.",
      category: "PASSION PROJECT",
      link: "https://ngwee.web.app/",
      image: "/ngwee.png",
      features: ["Limited Editions", "Artist Direct", "Collectibles"],
      bgColor: colors.mustard,
      textColor: colors.black,
    },
    {
      number: "02",
      title: "Slushy",
      tagline: "SELF-CARE MADE SIMPLE",
      description: "Book your next self care appointment easily",
      story:
        "Slushy transforms how people discover and book self-care services. From salons to spas, the platform offers a seamless booking experience with real-time availability.",
      category: "UI/UX DESIGN",
      link: "https://slushystore.web.app",
      image: "/slushy.png",
      features: ["Easy Booking", "Real-time", "Reviews"],
      bgColor: colors.red,
      textColor: colors.white,
    },
    {
      number: "03",
      title: "Kamba",
      tagline: "WHERE LOVE MEETS DIGITAL",
      description: "The premier digital-first wedding experience in Zambia.",
      story:
        "Kamba reimagines wedding planning for the digital age. From creating beautiful digital invitations to managing RSVPs and sharing memories.",
      category: "WEB DEVELOPMENT",
      link: "https://kamba-5ab4b.web.app/",
      image: "/kamba.png",
      features: ["Digital Invites", "RSVP", "Memories"],
      bgColor: colors.teal,
      textColor: colors.black,
    },
    {
      number: "04",
      title: "Sellr",
      tagline: "E-COMMERCE WITH PERSONALITY",
      description: "An e-commerce platform with personality",
      story:
        "Sellr brings character to online shopping. A full-stack e-commerce solution that allows businesses to create unique storefronts that reflect their brand personality.",
      category: "FULL STACK",
      link: "https://sellr-af.web.app/",
      image: "/selr.png",
      features: ["Custom Stores", "Payments", "Analytics"],
      bgColor: colors.navy,
      textColor: colors.white,
    },
    {
      number: "05",
      title: "Digiport",
      tagline: "IDENTITY REIMAGINED",
      description: "Digital passport solution demo",
      story:
        "Digiport demonstrates the future of digital identity management. A secure, user-friendly approach to passport and identity verification in the digital age.",
      category: "WEB APPLICATION",
      link: "https://digiport-dc.web.app/",
      image: "/Digiport.png",
      features: ["Secure ID", "Verification", "Digital-First"],
      bgColor: colors.coral,
      textColor: colors.white,
    },
    {
      number: "06",
      title: "Academia",
      tagline: "KNOWLEDGE SHARED",
      description: "Stackoverflow inspired Education platform",
      story:
        "Academia creates a community-driven learning environment where students and educators can share knowledge, ask questions, and grow together.",
      category: "DATA MODELS",
      link: "https://academia-af.web.app/",
      image: "/acadamia.png",
      features: ["Q&A Platform", "Community", "Learning"],
      bgColor: colors.purple,
      textColor: colors.white,
    },
    {
      number: "07",
      title: "Narative",
      tagline: "CONVERSATIONS TO INSIGHTS",
      description: "Translate conversations into insight",
      story:
        "Narative transforms raw conversations and data into actionable insights. Powerful analytics and processing tools for understanding customer feedback and communications.",
      category: "DATA PROCESSING",
      link: "https://narative-af.web.app/",
      image: "/narative.png",
      features: ["Analytics", "NLP", "Insights"],
      bgColor: colors.forest,
      textColor: colors.white,
    },
    {
      number: "08",
      title: "PIA",
      tagline: "AI-POWERED IDENTITY",
      description: "ADK-powered identity management solution",
      story:
        "Personal Identity Agent leverages the power of AI through ADK to create intelligent identity management solutions for the modern web.",
      category: "AI DEVELOPMENT",
      link: "https://pia-xi.vercel.app/",
      image: "/Personal Identity Agent - ADK.png",
      features: ["AI-Powered", "ADK", "Smart Auth"],
      bgColor: colors.pink,
      textColor: colors.white,
    },
    {
      number: "09",
      title: "Git Switcher",
      tagline: "SEAMLESS ACCOUNT MANAGEMENT",
      description: "NPM package for seamless git account management",
      story:
        "A developer tool that makes switching between multiple Git accounts effortless. Published on NPM for the global developer community.",
      category: "DEVELOPER TOOLS",
      link: "https://www.npmjs.com/package/@variant96/git-account-switcher",
      image: "/git account switcher - npm.png",
      features: ["NPM Package", "CLI Tool", "Multi-Account"],
      bgColor: colors.mustard,
      textColor: colors.black,
    },
    {
      number: "10",
      title: "EATI",
      tagline: "ELECTRONIC ACCESS TO INFORMATION",
      description: "Electronic Access to Information",
      story:
        "EATI (formerly ZANIS) provides electronic access to government information, making public data accessible and transparent for all citizens.",
      category: "GOVERNMENT TECH",
      link: "https://zanis-app.web.app/",
      image: "/zanis.png",
      features: ["Gov Tech", "Public Data", "Transparency"],
      bgColor: colors.navy,
      textColor: colors.white,
    },
  ];

  // Featured Project Card Component - Full viewport
  const FeaturedProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const numberY = useTransform(scrollYProgress, [0, 1], [200, -200]);

    // Create a slug from the title for tracking
    const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-");

    return (
      <Box
        ref={cardRef}
        data-project={projectSlug}
        minH="100vh"
        bg={project.bgColor}
        position="relative"
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        {/* Giant Background Number */}
        <MotionBox
          style={{ y: numberY }}
          position="absolute"
          right={{ base: "-15%", md: "-5%" }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={0}
          pointerEvents="none"
        >
          <Text
            fontSize={{ base: "300px", md: "500px", lg: "700px" }}
            fontWeight="900"
            color={project.textColor}
            opacity={0.1}
            lineHeight="0.8"
            fontFamily="'Arial Black', sans-serif"
          >
            {project.number}
          </Text>
        </MotionBox>

        <Container maxW="1400px" position="relative" zIndex={1} py={10}>
          <Link
            href={project.link}
            _hover={{ textDecoration: "none" }}
            display="block"
            role="group"
            isExternal
          >
            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 8, lg: 16 }}
              align="center"
              justify="space-between"
            >
              {/* Content Section */}
              <VStack
                flex="1"
                align={{ base: "center", lg: "flex-start" }}
                spacing={5}
                textAlign={{ base: "center", lg: "left" }}
                maxW={{ lg: "550px" }}
              >
                {/* Category */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="bold"
                    color={project.textColor}
                    opacity={0.7}
                    letterSpacing="0.2em"
                  >
                    {project.category}
                  </Text>
                </MotionBox>

                {/* Title */}
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Heading
                    as="h3"
                    fontSize={{ base: "60px", md: "100px", lg: "130px" }}
                    fontWeight="900"
                    color={project.textColor}
                    lineHeight="0.9"
                    letterSpacing="-0.03em"
                    fontFamily="'Arial Black', sans-serif"
                  >
                    {project.title}
                  </Heading>
                </MotionBox>

                {/* Tagline */}
                <MotionText
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight="bold"
                  color={project.textColor}
                  letterSpacing="0.1em"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {project.tagline}
                </MotionText>

                {/* Story */}
                <MotionText
                  fontSize={{ base: "sm", md: "md" }}
                  color={project.textColor}
                  opacity={0.8}
                  lineHeight="tall"
                  maxW="500px"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {project.story}
                </MotionText>

                {/* Features */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <HStack
                    spacing={3}
                    flexWrap="wrap"
                    justify={{ base: "center", lg: "flex-start" }}
                  >
                    {project.features.map((feature, i) => (
                      <Badge
                        key={i}
                        bg={project.textColor}
                        color={project.bgColor}
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </HStack>
                </MotionBox>

                {/* CTA */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  pt={2}
                >
                  <HStack
                    spacing={3}
                    color={project.textColor}
                    fontWeight="bold"
                    fontSize="lg"
                    letterSpacing="0.05em"
                    _groupHover={{ gap: 6 }}
                    transition="all 0.3s"
                  >
                    <Text>VIEW PROJECT</Text>
                    <ArrowForwardIcon
                      boxSize={5}
                      transition="transform 0.3s"
                      _groupHover={{ transform: "translateX(10px)" }}
                    />
                  </HStack>
                </MotionBox>
              </VStack>

              {/* Image Section */}
              <MotionBox
                flex="1"
                style={{ y }}
                maxW={{ base: "100%", lg: "550px" }}
              >
                <Box
                  position="relative"
                  borderRadius="3xl"
                  overflow="hidden"
                  bg="white"
                  boxShadow="2xl"
                  transition="transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  _groupHover={{ transform: "scale(1.02) rotate(1deg)" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="100%"
                    h={{ base: "280px", md: "350px", lg: "420px" }}
                    objectFit="cover"
                  />

                  {/* Hover Overlay */}
                  <Box
                    position="absolute"
                    inset={0}
                    bg="blackAlpha.700"
                    opacity={0}
                    transition="opacity 0.4s"
                    _groupHover={{ opacity: 1 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      bg="white"
                      p={5}
                      borderRadius="full"
                      transform="scale(0.5)"
                      opacity={0}
                      transition="all 0.3s"
                      _groupHover={{ transform: "scale(1)", opacity: 1 }}
                    >
                      <ArrowForwardIcon boxSize={10} color="black" />
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            </Flex>
          </Link>
        </Container>
      </Box>
    );
  };

  return (
    <Box id="portfolio" ref={ref}>
      {/* Section Header */}
      <Box py={{ base: 20, md: 32 }} bg="white">
        <Container maxW="1400px">
          <MotionBox
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.6 }}
          >
            <Badge
              bg="tertiary"
              color="secondary"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
              mb={4}
            >
              ● Portfolio
            </Badge>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "100px" }}
              fontWeight="900"
              color="primary"
              mb={4}
              fontFamily="'Arial Black', sans-serif"
            >
              Latest Works
            </Heading>
            <Text fontSize="xl" color="secondary" maxW="600px" mx="auto">
              Explore my portfolio of projects that showcase creative solutions
              and technical expertise
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* All Projects - Full Viewport Each */}
      {allProjects.map((project, index) => (
        <FeaturedProjectCard key={index} project={project} />
      ))}
    </Box>
  );
};

export default PortfolioSection;
