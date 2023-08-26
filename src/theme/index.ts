import { extendTheme } from '@chakra-ui/react'
import { config, fonts } from './foundations'
const overrides = {
  config,
  colors: {
    gray: {
      50: '#F7F7FC',
      100: '#F3F2F8',
      200: '#E5E4E9',
      300: '#D2D1D7',
      400: '#9F9BA2',
      500: '#655E68',
      600: '#4B434D',
      700: '#372D39',
      800: '#251A26',
      900: '#211723',
    },
  },
  components: {},
  fonts,
  shadows: {},
  sizes: {
    max: '100ch',
    readable: '72ch',
  },
  styles: {
    global: () => ({
      '*': {
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        scrollMarginTop: '5rem',
      },
      body: {
        bg: 'bg',
        color: 'body',
        transition: 'background 200ms linear !important',
        letterSpacing: '0.0em',
        lineHeight: '1.75',
      },
      'h1, h2, h3, h4, h5, h6': {
        letterSpacing: '0.04em',
      },
      p: {
        mb: 3,
      },
    }),
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'black',
      color: 'body',
      fontSize: ['6xl', '7xl', '8xl'],
      textAlign: 'center',
      lineHeight: 'none',
      mt: 4,
      mb: 8,
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'body',
      fontSize: ['3xl', null, '4xl'],
    },
  },
  semanticTokens: {
    colors: {
      body: 'gray.900', //{ _light: 'black', _dark: 'white' },
      bg: 'white', //{ _light: 'white', _dark: 'black' },
      primary: 'blue.300', //{ _light: 'blue.300', _dark: 'blue.900' },
      link: 'fuchsia', //{ _light: 'fuchsia', _dark: 'fuchsia' },
    },
  },
}

export default extendTheme(overrides)
