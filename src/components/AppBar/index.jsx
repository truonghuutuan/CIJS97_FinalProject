import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Home from './Menus/Home'
import Contact from './Menus/Contact'
import About from './Menus/About'
import Signup from './Menus/Signup'
import SearchFieldComponent from './SearchField/SearchField.component'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      border: '1px solid #eee',
      py: '20px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5
      }}>
        <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main', fontSize: '24px' }}>Exclusive</Typography>
      </Box>

      <Box display={'flex'} gap={5}>

        <Home />
        <Contact />
        <About />
        <Signup />
      </Box>

      <SearchFieldComponent />

    </Box>
  )
}

export default AppBar
