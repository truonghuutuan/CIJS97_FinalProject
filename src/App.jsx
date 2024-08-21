import { Container } from '@mui/material'
import Profiles from '~/pages/Profiles'
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import Board from './pages/Boards/_id'
import NotFound from './pages/NotFounds'
import Product from './pages/Products'
import AboutPage from './pages/AboutPage'
import CheckoutPage from './pages/CheckoutPage'
import ContactPage from './pages/ContactPage'
import Wishlist from './pages/Wishlist'

function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar />
      <Container maxWidth={'xl'} disableGutters sx={{ height: '100%' }}>
        {/* <AboutPage /> */}
        {/* <Board /> */}
        {/* <Profiles /> */}
        {/* <NotFound /> */}
        {/* <Product /> */}
        {/* <CheckoutPage /> */}
        {/* <ContactPage /> */}
        {/* <Wishlist /> */}
      </Container>
      <Footer />
    </Container>
  )
}

export default App