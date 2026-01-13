import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Badge,
  Image,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Slushy',
      description: 'Book your next self care appointment easily',
      category: 'UI/UX Design',
      link: 'https://slushystore.web.app',
      image: '/slushy.png',
    },
    {
      title: 'Kamba',
      description: 'The premier digital-first wedding experience in Zambia.',
      category: 'Web Development',
      link: 'https://kamba-5ab4b.web.app/',
      image: '/kamba.png',
    },
    {
      title: 'Sellr',
      description: 'An e-commerce platform with personality',
      category: 'Full Stack',
      link: 'https://sellr-af.web.app/',
      image: '/selr.png',
    },
    {
      title: 'Digiport',
      description: 'Digital passport solution demo',
      category: 'Web Application',
      link: 'https://digiport-dc.web.app/',
      image: '/Digiport.png',
    },
    {
      title: 'Academia',
      description: 'Stackoverflow inspired Education platform',
      category: 'Data Models',
      link: 'https://academia-af.web.app/',
      image: '/acadamia.png',
    },
    {
      title: 'Narative',
      description: 'Translate conversations into insight',
      category: 'Data Processing',
      link: 'https://narative-af.web.app/',
      image: '/narative.png',
    },
    {
      title: 'Personal Identity Agent',
      description: 'ADK-powered identity management solution',
      category: 'AI Development',
      link: 'https://pia-xi.vercel.app/',
      image: '/Personal Identity Agent - ADK.png',
    },
    {
      title: 'Git Account Switcher',
      description: 'NPM package for seamless git account management',
      category: 'Developer Tools',
      link: 'https://www.npmjs.com/package/@variant96/git-account-switcher',
      image: '/git account switcher - npm.png',
    },
    {
      title: 'EATI',
      description: 'Electronic Access to Information',
      category: 'Government Tech',
      link: 'https://zanis-app.web.app/',
      image: '/zanis.png',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box id="portfolio" py={{ base: 20, md: 32 }} bg="white" ref={ref}>
      <Container maxW="1400px">
        <MotionBox
          textAlign="center"
          mb={16}
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
            fontSize={{ base: '4xl', md: '5xl' }}
            fontWeight="medium"
            color="primary"
            mb={4}
          >
            Latest Works
          </Heading>
          <Text fontSize="lg" color="secondary" maxW="600px" mx="auto">
            Explore my portfolio of projects that showcase creative solutions
            and technical expertise
          </Text>
        </MotionBox>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {displayedProjects.map((project, index) => (
              <MotionBox key={index} variants={itemVariants}>
                <Link
                  href={project.link}
                  _hover={{ textDecoration: 'none' }}
                  display="block"
                  role="group"
                >
                  <VStack
                    align="flex-start"
                    bg="tertiary"
                    borderRadius="2xl"
                    overflow="hidden"
                    transition="all 0.3s"
                    _groupHover={{ transform: 'translateY(-8px)' }}
                  >
                    {/* Project Image */}
                    <Box
                      w="full"
                      h="300px"
                      bg="white"
                      position="relative"
                      overflow="hidden"
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          w="100%"
                          h="100%"
                          objectFit="contain"
                        />
                      ) : (
                        <Box
                          w="full"
                          h="full"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text color="secondary" fontSize="sm">
                            Project Image
                          </Text>
                        </Box>
                      )}
                      <Box
                        position="absolute"
                        bottom={4}
                        right={4}
                        bg="primary"
                        color="white"
                        w={12}
                        h={12}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        opacity={0}
                        transform="scale(0.8)"
                        transition="all 0.3s"
                        _groupHover={{ opacity: 1, transform: 'scale(1)' }}
                      >
                        <ArrowForwardIcon boxSize={5} />
                      </Box>
                    </Box>

                    {/* Content */}
                    <VStack align="flex-start" p={6} spacing={2} w="full">
                      <Badge
                        bg="white"
                        color="secondary"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="medium"
                      >
                        {project.category}
                      </Badge>
                      <Heading
                        size="md"
                        color="primary"
                        fontWeight="medium"
                      >
                        {project.title}
                      </Heading>
                      <Text color="secondary" fontSize="sm">
                        {project.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* View More Button */}
        <MotionBox
          textAlign="center"
          mt={16}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            as="button"
            onClick={() => setShowAll(!showAll)}
            display="inline-flex"
            alignItems="center"
            gap={2}
            fontSize="lg"
            color="primary"
            fontWeight="medium"
            bg="transparent"
            border="none"
            cursor="pointer"
            _hover={{ gap: 4 }}
            transition="all 0.3s"
          >
            {showAll ? 'View Less' : 'View More'}{' '}
            <ArrowForwardIcon
              transform={showAll ? 'rotate(-90deg)' : 'rotate(0deg)'}
              transition="transform 0.3s"
            />
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
