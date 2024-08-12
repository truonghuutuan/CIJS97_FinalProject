import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Container } from '@mui/material'

function handleClick(event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

function ProfileBar() {
  return (
    <Container maxWidth={''} sx={{
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            fontWeight='700'
          >
            My Account
          </Link>
        </Breadcrumbs>
      </div>
      Welcome! Md Rimel
    </Container>
  )
}

export default ProfileBar