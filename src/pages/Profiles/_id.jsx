import { Container } from '@mui/material'
import AppBar from '~/components/AppBar'
import Footer from '~/components/Footer'
import ProfileBar from '~/pages/Profiles/ProfileBar'
import ProfileContent from '~/pages/Profiles/ProfileContent'

function Profile() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <ProfileBar />
      <ProfileContent />
      <Footer />
    </Container>
  )
}

export default Profile
