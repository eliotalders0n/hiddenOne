import { Box, Flex, HStack, Link, IconButton, useDisclosure, VStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      zIndex={1000}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex
        maxW="1400px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={6}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Link
          href="#"
          fontSize="2xl"
          fontWeight="bold"
          color="primary"
          _hover={{ textDecoration: 'none' }}
        >
          PM
        </Link>

        {/* Desktop Navigation */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              fontSize="md"
              color="secondary"
              fontWeight="medium"
              _hover={{ color: 'primary' }}
              transition="all 0.5s"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            px={6}
            py={2}
            bg="primary"
            color="white"
            borderRadius="full"
            fontWeight="medium"
            _hover={{ bg: 'secondary' }}
            transition="all 0.2s"
          >
            Book A Call →
          </Link>
        </HStack>

        {/* Mobile menu button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile Navigation */}
      {isOpen && (
        <VStack
          display={{ base: 'flex', md: 'none' }}
          pb={4}
          spacing={4}
          bg="white"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              fontSize="md"
              color="secondary"
              fontWeight="medium"
              _hover={{ color: 'primary' }}
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            px={6}
            py={2}
            bg="primary"
            color="white"
            borderRadius="full"
            fontWeight="medium"
            _hover={{ bg: 'secondary' }}
            onClick={onClose}
          >
            Book A Call →
          </Link>
        </VStack>
      )}
    </Box>
  );
};

export default Navigation;
