import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionLink = motion(Link);
const MotionImage = motion(Image);

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  // Spring physics for 90s cartoon feel
  const springConfig = { stiffness: 400, damping: 25, mass: 0.5 };
  const bouncySpring = { type: "spring", stiffness: 500, damping: 15 };

  // Animated values with spring physics
  const logoScale = useSpring(1, springConfig);
  const navScale = useSpring(1, springConfig);
  const navRotate = useSpring(0, { stiffness: 300, damping: 20 });

  // Project colors from portfolio
  const projectColors = {
    ngwee: { bg: "#E5A030", text: "#222222", name: "NGWEE" },
    slushy: { bg: "#D94A4A", text: "#FFFFFF", name: "SLUSHY" },
    kamba: { bg: "#5FBFBF", text: "#222222", name: "KAMBA" },
    sellr: { bg: "#1A2B4A", text: "#FFFFFF", name: "SELLR" },
    digiport: { bg: "#E07B53", text: "#FFFFFF", name: "DIGIPORT" },
    academia: { bg: "#7B68EE", text: "#FFFFFF", name: "ACADEMIA" },
    narative: { bg: "#2D5A4A", text: "#FFFFFF", name: "NARATIVE" },
    pia: { bg: "#E84A7F", text: "#FFFFFF", name: "PIA" },
    "git-switcher": { bg: "#E5A030", text: "#222222", name: "GIT SWITCHER" },
    eati: { bg: "#1A2B4A", text: "#FFFFFF", name: "EATI" },
  };

  const sections = [
    { id: "home", name: "HOME", number: "00" },
    { id: "about", name: "ABOUT", number: "01" },
    { id: "portfolio", name: "WORK", number: "02" },
    { id: "experience", name: "EXPERIENCE", number: "03" },
    { id: "contact", name: "CONTACT", number: "04" },
  ];

  const navItems = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "WORK", href: "#portfolio", id: "portfolio" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  // Get dynamic styles based on section/project
  const getCurrentStyle = () => {
    // If we're in portfolio and have an active project
    if (
      activeSection === "portfolio" &&
      activeProject &&
      projectColors[activeProject]
    ) {
      return projectColors[activeProject];
    }

    // Default section styles
    const styles = {
      home: { bg: "#FFFFFF", text: "#222222", accent: "#222222", name: "HOME" },
      about: {
        bg: "#FFFFFF",
        text: "#222222",
        accent: "#222222",
        name: "ABOUT",
      },
      portfolio: {
        bg: "#E5A030",
        text: "#222222",
        accent: "#222222",
        name: "WORK",
      },
      experience: {
        bg: "#222222",
        text: "#FFFFFF",
        accent: "#FFFFFF",
        name: "EXPERIENCE",
      },
      contact: {
        bg: "#FFFFFF",
        text: "#222222",
        accent: "#222222",
        name: "CONTACT",
      },
    };
    return styles[activeSection] || styles.home;
  };

  const currentStyle = getCurrentStyle();
  const currentSectionData =
    sections.find((s) => s.id === activeSection) || sections[0];

  // Track scroll with velocity and direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const velocity = Math.abs(latest - lastScrollY.current);
    setScrollDirection(latest > lastScrollY.current ? "down" : "up");
    lastScrollY.current = latest;

    setIsScrolled(latest > 50);

    // Calculate scroll progress
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress((latest / docHeight) * 100);

    // Cartoon-like reactions to scroll
    const normalizedVelocity = Math.min(velocity / 30, 1);

    // Squash and stretch based on scroll direction
    if (scrollDirection === "down") {
      logoScale.set(1 - normalizedVelocity * 0.1);
      navScale.set(1 - normalizedVelocity * 0.02);
      navRotate.set(normalizedVelocity * 2);
    } else {
      logoScale.set(1 + normalizedVelocity * 0.1);
      navScale.set(1 + normalizedVelocity * 0.02);
      navRotate.set(-normalizedVelocity * 2);
    }

    // Bounce back
    setTimeout(() => {
      logoScale.set(1);
      navScale.set(1);
      navRotate.set(0);
    }, 100);
  });

  // Intersection Observer for sections and projects
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id || entry.target.dataset.project;

          // Check if it's a project
          if (entry.target.dataset.project) {
            setActiveProject(entry.target.dataset.project);
            setActiveSection("portfolio");
          } else if (
            ["about", "portfolio", "experience", "contact"].includes(id)
          ) {
            setActiveSection(id);
            if (id !== "portfolio") {
              setActiveProject(null);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Function to observe all relevant elements
    const observeElements = () => {
      // Observe sections
      const sectionElements = document.querySelectorAll("[id]");
      sectionElements.forEach((el) => {
        if (["about", "portfolio", "experience", "contact"].includes(el.id)) {
          observer.observe(el);
        }
      });

      // Observe portfolio projects (they have data-project attribute)
      const projectElements = document.querySelectorAll("[data-project]");
      projectElements.forEach((el) => observer.observe(el));
    };

    // Initial observation with delay to ensure DOM is ready
    const timeoutId = setTimeout(observeElements, 100);

    // MutationObserver to catch dynamically added project elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Element node
            if (node.dataset?.project) {
              observer.observe(node);
            }
            // Also check children
            const projectChildren = node.querySelectorAll?.("[data-project]");
            projectChildren?.forEach((el) => observer.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Check if at top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
        setActiveProject(null);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Custom hamburger with cartoon animation
  const MenuIcon = ({ color }) => (
    <VStack spacing="6px" w="28px" cursor="pointer">
      <MotionBox
        w="full"
        h="3px"
        bg={color}
        borderRadius="full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 9 : 0,
          scaleX: isOpen ? 1.1 : 1,
        }}
        transition={bouncySpring}
      />
      <MotionBox
        w="full"
        h="3px"
        bg={color}
        borderRadius="full"
        animate={{
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
        transition={bouncySpring}
      />
      <MotionBox
        w="20px"
        h="3px"
        bg={color}
        borderRadius="full"
        alignSelf="flex-end"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -9 : 0,
          width: isOpen ? "28px" : "20px",
        }}
        transition={bouncySpring}
      />
    </VStack>
  );

  return (
    <>
      <MotionBox
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        {/* Morphing background blob */}
        <MotionBox
          position="absolute"
          inset={0}
          animate={{
            backgroundColor: currentStyle.bg,
            borderRadius: isScrolled ? "0" : "0",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />

        {/* Animated color accent line */}
        <MotionBox
          position="absolute"
          bottom={0}
          left={0}
          h="3px"
          borderRadius="full"
          animate={{
            width: `${scrollProgress}%`,
            backgroundColor: currentStyle.text,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        <MotionFlex
          maxW="1400px"
          mx="auto"
          px={{ base: 6, md: 8 }}
          align="center"
          justify="space-between"
          position="relative"
          style={{ scale: navScale, rotate: navRotate }}
          animate={{
            paddingTop: isScrolled ? "12px" : "20px",
            paddingBottom: isScrolled ? "12px" : "20px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Logo with cartoon bounce */}
          <HStack spacing={4}>
            <MotionBox
              as="a"
              href="#"
              display="flex"
              alignItems="center"
              gap={2}
              style={{ scale: logoScale }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { rotate: { duration: 0.3 } },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <MotionImage
                src="/PM-logo.png"
                alt="PM Logo"
                h={{ base: "36px", md: "44px" }}
                w="auto"
                animate={{
                  scale: isScrolled ? 0.85 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Bouncing dot */}
              <MotionBox
                w="10px"
                h="10px"
                borderRadius="full"
                animate={{
                  backgroundColor: currentStyle.text,
                  y: [0, -5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                  scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                  backgroundColor: { duration: 0.3 },
                }}
              />
            </MotionBox>

            {/* Section/Project indicator with elastic animation */}
            <AnimatePresence mode="wait">
              <MotionBox
                key={activeProject || activeSection}
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                gap={3}
                pl={4}
                ml={4}
                borderLeft="3px solid"
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  borderColor: currentStyle.text,
                }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={bouncySpring}
              >
                <MotionText
                  fontSize="xs"
                  fontWeight="900"
                  fontFamily="'Arial Black', sans-serif"
                  animate={{ color: currentStyle.text, opacity: 0.5 }}
                >
                  {currentSectionData.number}
                </MotionText>
                <MotionText
                  fontSize="sm"
                  fontWeight="bold"
                  letterSpacing="0.15em"
                  animate={{ color: currentStyle.text }}
                >
                  {activeProject && projectColors[activeProject]
                    ? projectColors[activeProject].name
                    : currentSectionData.name}
                </MotionText>
              </MotionBox>
            </AnimatePresence>
          </HStack>

          {/* Center: Morphing progress indicator */}
          <HStack
            spacing={3}
            display={{ base: "none", md: "flex" }}
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            {sections.map((section) => (
              <MotionBox
                key={section.id}
                as="a"
                href={section.id === "home" ? "#" : `#${section.id}`}
                cursor="pointer"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  width: activeSection === section.id ? "32px" : "10px",
                  height: "10px",
                  backgroundColor:
                    activeSection === section.id
                      ? currentStyle.text
                      : "transparent",
                  borderColor: currentStyle.text,
                  borderRadius: activeSection === section.id ? "5px" : "50%",
                }}
                transition={bouncySpring}
                border="2px solid"
                title={section.name}
              />
            ))}
          </HStack>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <MotionBox
                key={item.name}
                as="a"
                href={item.href}
                position="relative"
                whileHover="hover"
                initial="initial"
              >
                <MotionText
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="0.15em"
                  animate={{
                    color: currentStyle.text,
                    opacity: activeSection === item.id ? 1 : 0.6,
                  }}
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -2 },
                  }}
                  transition={bouncySpring}
                >
                  {item.name}
                </MotionText>

                {/* Bouncy underline */}
                <MotionBox
                  position="absolute"
                  bottom="-6px"
                  left="50%"
                  h="3px"
                  borderRadius="full"
                  animate={{
                    width: activeSection === item.id ? "100%" : "0%",
                    x: "-50%",
                    backgroundColor: currentStyle.text,
                  }}
                  variants={{
                    hover: { width: "100%", scaleY: 1.5 },
                  }}
                  transition={bouncySpring}
                />
              </MotionBox>
            ))}

            {/* CTA Button with jelly effect */}
            <MotionBox
              as="a"
              href="#contact"
              px={6}
              py={3}
              borderRadius="full"
              fontWeight="bold"
              fontSize="xs"
              letterSpacing="0.05em"
              animate={{
                backgroundColor: currentStyle.text,
                color: currentStyle.bg,
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
              }}
              whileTap={{
                scale: 0.95,
                rotate: 0,
              }}
              transition={bouncySpring}
            >
              @
            </MotionBox>
          </HStack>

          {/* Mobile controls */}
          <HStack spacing={3} display={{ base: "flex", md: "none" }}>
            {/* Mini color indicator */}
            <MotionBox
              w="8px"
              h="8px"
              borderRadius="full"
              animate={{
                backgroundColor: currentStyle.text,
                scale: [1, 1.2, 1],
              }}
              transition={{
                scale: { repeat: Infinity, duration: 2 },
                backgroundColor: { duration: 0.3 },
              }}
            />

            <IconButton
              onClick={isOpen ? onClose : onOpen}
              icon={<MenuIcon color={currentStyle.text} />}
              variant="ghost"
              aria-label="Toggle Navigation"
              _hover={{ bg: "transparent" }}
            />
          </HStack>
        </MotionFlex>
      </MotionBox>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={2000}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Animated background blobs */}
            <MotionBox
              position="absolute"
              inset={0}
              bg={currentStyle.bg}
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 1.5, borderRadius: "0%" }}
              exit={{ scale: 0, borderRadius: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{ originX: 1, originY: 0 }}
            />

            {/* Close button */}
            <MotionFlex
              maxW="1400px"
              mx="auto"
              px={6}
              py={5}
              justify="space-between"
              align="center"
              position="relative"
              zIndex={1}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image src="/PM-logo.png" alt="PM Logo" h="40px" w="auto" />
              <MotionBox
                as="button"
                onClick={onClose}
                p={2}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={bouncySpring}
              >
                <CloseIcon boxSize={5} color={currentStyle.text} />
              </MotionBox>
            </MotionFlex>

            {/* Menu items with stagger */}
            <VStack
              spacing={0}
              align="stretch"
              px={6}
              pt={6}
              position="relative"
              zIndex={1}
            >
              {sections.map((item, index) => (
                <MotionLink
                  key={item.id}
                  href={item.id === "home" ? "#" : `#${item.id}`}
                  onClick={onClose}
                  py={4}
                  borderBottom="2px solid"
                  borderColor={`${currentStyle.text}20`}
                  _hover={{ textDecoration: "none" }}
                  initial={{ opacity: 0, x: -50, rotate: -5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: 50, rotate: 5 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  whileHover={{ x: 20, scale: 1.02 }}
                >
                  <Flex justify="space-between" align="center">
                    <HStack spacing={4}>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={currentStyle.text}
                        opacity={0.4}
                        fontFamily="'Arial Black', sans-serif"
                      >
                        {item.number}
                      </Text>
                      <Text
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="900"
                        color={currentStyle.text}
                        fontFamily="'Arial Black', sans-serif"
                      >
                        {item.name}
                      </Text>
                    </HStack>
                    {activeSection === item.id && (
                      <MotionBox
                        w="16px"
                        h="16px"
                        borderRadius="full"
                        bg={currentStyle.text}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={bouncySpring}
                      />
                    )}
                  </Flex>
                </MotionLink>
              ))}
            </VStack>

            {/* Fun animated progress */}
            <MotionBox
              position="absolute"
              bottom={16}
              left={6}
              right={6}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Text
                fontSize="xs"
                color={currentStyle.text}
                opacity={0.4}
                letterSpacing="0.2em"
                mb={3}
              >
                SCROLL PROGRESS
              </Text>
              <Box
                w="full"
                h="4px"
                bg={`${currentStyle.text}20`}
                borderRadius="full"
                overflow="hidden"
              >
                <MotionBox
                  h="full"
                  bg={currentStyle.text}
                  borderRadius="full"
                  initial={{ width: 0 }}
                  animate={{ width: `${scrollProgress}%` }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </Box>
              <MotionText
                fontSize="5xl"
                fontWeight="900"
                color={currentStyle.text}
                fontFamily="'Arial Black', sans-serif"
                mt={2}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {Math.round(scrollProgress)}%
              </MotionText>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
