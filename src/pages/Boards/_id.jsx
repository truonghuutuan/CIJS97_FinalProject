import { Container } from '@mui/material'
import AppBar from '~/components/AppBar'
import BoardBar from '~/pages/Boards/BoardBar'
import BoardContent from './BoardContent'
import Footer from '~/components/Footer'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      {/* <BoardBar /> */}
      <BoardContent />
      <Footer />
    </Container>
  )
}

export default Board
