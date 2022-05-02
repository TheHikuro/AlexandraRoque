import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import '../firebase'
import Container from '../components/container'
import { ModalProvider } from '../components/modal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ModalProvider>
    </AuthProvider>
  )
}

export default MyApp
