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
  Spinner,
} from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { db } from "../firebase_config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Legacy color palette for backwards compatibility
const legacyColors = {
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

// Helper to resolve color (supports both hex and legacy named colors)
const resolveColor = (color, fallback = "#5FBFBF") => {
  if (!color) return fallback;
  // If it starts with #, it's already a hex value
  if (color.startsWith("#")) return color;
  // Otherwise, try to map from legacy colors
  return legacyColors[color] || fallback;
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("order", "asc"));
        const snapshot = await getDocs(q);
        const projectsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            number: String(data.order).padStart(2, "0"),
            bgColor: resolveColor(data.bgColor, "#5FBFBF"),
            textColor: resolveColor(data.textColor, "#222222"),
          };
        });
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
      {loading ? (
        <Box py={20} textAlign="center">
          <Spinner size="xl" color="primary" />
        </Box>
      ) : (
        projects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))
      )}
    </Box>
  );
};

export default PortfolioSection;
