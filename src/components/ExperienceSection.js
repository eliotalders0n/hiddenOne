import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      number: "01",
      company: "BongoHive",
      location: "Remote",
      role: "Full Stack Developer & Designer",
      period: "2025",
      year: "NOW",
      description:
        "Creating custom web solutions for clients, specializing in React-based applications and modern UI/UX design. Leading projects from concept to deployment.",
      skills: ["React", "Node.js", "Firebase", "UI/UX", "TypeScript"],
    },
    {
      number: "02",
      company: "Webdev Technologies",
      location: "Zambia",
      role: "Software Developer",
      period: "2023 - 2024",
      year: "2023",
      description:
        "Developed integrated mining solutions for Kansanshi Mine PLC. Built robust enterprise applications handling critical operational data.",
      skills: ["TypeScript", "C#", "Git", ".NET", "SQL Server"],
    },
    {
      number: "03",
      company: "Probase Group",
      location: "On Site",
      role: "Web Developer",
      period: "2019 - 2020",
      year: "2019",
      description:
        "Built and maintained banking platforms, focusing on performance optimization and data integrity. Worked on high-traffic financial applications.",
      skills: ["Java", "SQL", "Grails", "Spring", "PostgreSQL"],
    },
  ];

  // Experience Card Component
  const ExperienceCard = ({ experience, index }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yearY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const isEven = index % 2 === 0;

    return (
      <Box
        ref={cardRef}
        minH={{ base: "auto", lg: "100vh" }}
        py={{ base: 16, lg: 0 }}
        display="flex"
        alignItems="center"
        position="relative"
        bg={isEven ? "white" : "#222222"}
        overflow="hidden"
      >
        {/* Giant Background Year */}
        <MotionBox
          style={{ y: yearY }}
          position="absolute"
          right={{ base: "-20%", lg: "-5%" }}
          top="50%"
          transform="translateY(-50%)"
          zIndex={0}
          pointerEvents="none"
        >
          <Text
            fontSize={{ base: "200px", md: "350px", lg: "500px" }}
            fontWeight="900"
            color={isEven ? "#222222" : "white"}
            opacity={0.05}
            lineHeight="0.8"
            fontFamily="'Arial Black', sans-serif"
          >
            {experience.year}
          </Text>
        </MotionBox>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, lg: 20 }}
            align="center"
          >
            {/* Left Side - Number and Period */}
            <VStack
              align={{ base: "center", lg: "flex-start" }}
              spacing={4}
              minW={{ lg: "300px" }}
            >
              <MotionBox
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Text
                  fontSize={{ base: "100px", md: "150px", lg: "200px" }}
                  fontWeight="900"
                  color={isEven ? "#222222" : "white"}
                  lineHeight="0.8"
                  fontFamily="'Arial Black', sans-serif"
                >
                  {experience.number}
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="bold"
                  color={isEven ? "#222222" : "white"}
                  letterSpacing="0.2em"
                  textTransform="uppercase"
                >
                  {experience.period}
                </Text>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Badge
                  bg={isEven ? "#222222" : "white"}
                  color={isEven ? "white" : "#222222"}
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                >
                  {experience.location}
                </Badge>
              </MotionBox>
            </VStack>

            {/* Right Side - Content */}
            <MotionBox flex="1" style={{ y }}>
              <VStack
                align={{ base: "center", lg: "flex-start" }}
                spacing={6}
                textAlign={{ base: "center", lg: "left" }}
              >
                {/* Company */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <Heading
                    as="h3"
                    fontSize={{ base: "4xl", md: "6xl", lg: "80px" }}
                    fontWeight="900"
                    color={isEven ? "#222222" : "white"}
                    lineHeight="1"
                    fontFamily="'Arial Black', sans-serif"
                  >
                    {experience.company}
                  </Heading>
                </MotionBox>

                {/* Role */}
                <MotionText
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color={isEven ? "#222222" : "white"}
                  opacity={0.7}
                  letterSpacing="0.05em"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {experience.role}
                </MotionText>

                {/* Description */}
                <MotionText
                  fontSize={{ base: "md", md: "lg" }}
                  color={isEven ? "#222222" : "white"}
                  opacity={0.6}
                  lineHeight="tall"
                  maxW="600px"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {experience.description}
                </MotionText>

                {/* Skills */}
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <HStack
                    spacing={3}
                    flexWrap="wrap"
                    justify={{ base: "center", lg: "flex-start" }}
                  >
                    {experience.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        borderColor={isEven ? "#222222" : "white"}
                        color={isEven ? "#222222" : "white"}
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                        borderWidth="2px"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </HStack>
                </MotionBox>
              </VStack>
            </MotionBox>
          </Flex>
        </Container>

        {/* Decorative Line */}
        <Box
          position="absolute"
          left={{ base: "50%", lg: "150px" }}
          top={0}
          bottom={0}
          w="2px"
          bg={isEven ? "#222222" : "white"}
          opacity={0.1}
          transform={{ base: "translateX(-50%)", lg: "none" }}
          display={{ base: "none", md: "block" }}
        />
      </Box>
    );
  };

  return (
    <Box id="experience" ref={ref}>
      {/* Section Header */}
      <Box
        py={{ base: 20, md: 32 }}
        bg="#222222"
        position="relative"
        overflow="hidden"
      >
        {/* Background Text */}
        <Text
          position="absolute"
          top="30%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={{ base: "100px", md: "200px", lg: "230px" }}
          fontWeight="900"
          color="white"
          opacity={0.03}
          whiteSpace="nowrap"
          fontFamily="'Arial Black', sans-serif"
          pointerEvents="none"
        >
          EXPERIENCE
        </Text>

        <Container maxW="1400px" position="relative" zIndex={1}>
          <MotionBox
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.6 }}
          >
            <Badge
              bg="white"
              color="#222222"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              mb={6}
              textTransform="uppercase"
              letterSpacing="0.1em"
            >
              ● Experience
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "5xl", md: "100px", lg: "150px" }}
              fontWeight="900"
              color="white"
              mb={6}
              fontFamily="'Arial Black', sans-serif"
              lineHeight="0.9"
            >
              MY JOURNEY
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="white"
              opacity={0.6}
              maxW="700px"
              mx="auto"
            >
              Over the past 10+ years, I've had the opportunity to work on a
              wide range of projects, collaborating with diverse teams and
              clients to bring creative visions to life.
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Experience Cards */}
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}

      {/* Bottom CTA Section */}
      <Box
        py={{ base: 20, md: 32 }}
        bg="#222222"
        position="relative"
        overflow="hidden"
      >
        <Container
          maxW="1400px"
          textAlign="center"
          position="relative"
          zIndex={1}
        >
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="900"
              color="white"
              fontFamily="'Arial Black', sans-serif"
              mb={6}
            >
              WANT TO WORK TOGETHER?
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="white"
              opacity={0.6}
              maxW="500px"
              mx="auto"
            >
              I'm always open to discussing new projects and opportunities.
            </Text>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default ExperienceSection;
