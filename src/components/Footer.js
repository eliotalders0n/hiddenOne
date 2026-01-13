import { Box, Container, Text, HStack, Link, Flex, VStack } from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Box as="footer" bg="primary" color="white" py={12}>
      <Container maxW="1400px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          {/* Left side - Email */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              PM
            </Text>
            <Link
              href="https://appsetstudio.com/"
              fontSize="lg"
              _hover={{ opacity: 0.8 }}
            >
              A product of Appfusion Studio Limited
            </Link>
          </VStack>

          {/* Right side - Navigation */}
          <HStack
            spacing={6}
            flexWrap="wrap"
            justify={{ base: 'center', md: 'flex-end' }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                fontSize="sm"
                opacity={0.8}
                _hover={{ opacity: 1 }}
                transition="opacity 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </Flex>

        {/* Bottom - Copyright */}
        <Text
          textAlign="center"
          mt={12}
          pt={8}
          borderTop="1px"
          borderColor="whiteAlpha.300"
          opacity={0.6}
          fontSize="sm"
        >
          © {currentYear} Pukuta Mwanza. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
