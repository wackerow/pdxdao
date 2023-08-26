import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Header, Footer, Fonts } from '@/components'
import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Header />
      <Component {...pageProps} id="main-content" />
      <Footer />
    </ChakraProvider>
  )
}
