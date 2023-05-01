import { ChakraProvider /* , localStorageManager */ } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header, Footer } from '@/components'
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} /* colorModeManager={localStorageManager} */>
      <Header />
      <Component {...pageProps} id="main-content" />
      <Footer />
    </ChakraProvider>
  )
}
