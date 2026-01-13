import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#222222',
    secondary: '#7B7B7B',
    tertiary: '#F8F8F8',
    white: '#FFFFFF',
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'primary',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'primary',
          color: 'white',
          _hover: {
            bg: 'secondary',
          },
        },
        outline: {
          borderColor: 'primary',
          color: 'primary',
          _hover: {
            bg: 'tertiary',
          },
        },
      },
    },
  },
});

export default theme;
