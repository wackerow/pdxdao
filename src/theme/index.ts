import { extendTheme } from '@chakra-ui/react'
import { config, fonts } from './foundations'
const overrides = {
  config,
  colors: {},
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
        transition: 'background 200ms linear !important',
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
      fontWeight: 'bold',
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
      fontSize: '4xl',
    },
  },
  semanticTokens: {
    colors: {
      body: { _light: 'black', _dark: 'white' },
      bg: { _light: 'white', _dark: 'black' },
      primary: { _light: 'blue.300', _dark: 'blue.900' },
      link: { _light: 'fuchsia', _dark: 'fuchsia' },
    },
  },
}

export default extendTheme(overrides)
