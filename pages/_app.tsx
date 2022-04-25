import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import '../firebase'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Container from '../components/container'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
