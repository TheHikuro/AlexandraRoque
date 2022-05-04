import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '../components/container'
import { ModalProvider } from '../components/modal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ModalProvider>
  )
}

export default MyApp
