import * as React from 'react'
import { keyframes, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


const MOCK_SIDEBAR = [
  {
    key: 0,
    title: 'My Profile'
  },
  {
    key: 1,
    title: 'Address Book'
  },
  {
    key: 2,
    title: 'My Payment Options'
  }
]

const MOCK_SIDEBAR_MYORDERS = [
  {
    key: 0,
    title: 'My Returns'
  },
  {
    key: 0,
    title: 'My Cancellations'
  }
]

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}))

function ProfileContent() {
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{ flexGrow: 1, maxWidth: 500 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Manage My Account
            </Typography>
            <Demo>
              <List dense={dense}>
                {MOCK_SIDEBAR.map((item) => (
                  <ListItem key={item.key}>
                    <ListItemText
                      primary={item.title}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>


            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              My Orders
            </Typography>
            <Demo>
              <List dense={dense}>
                {MOCK_SIDEBAR_MYORDERS.map((item) => (
                  <ListItem key={item.key}>
                    <ListItemText
                      primary={item.title}
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                ))}
              </List>
            </Demo>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              My Wishlist
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        Edit Your Profile
        <Form className="w-75">
          <Form.Group
            className=" d-flex flex-column"
            controlId="name"
          >
          </Form.Group>
          <Form.Group
            className=" d-flex flex-column"
            controlId="name"
          >
          </Form.Group>

          <Form.Group controlId="userName" className='pb-3'>
            <Form.Control
              className='fw-light ps-0 border-0 border-5 border-bottom border-light-subtle shadow-none'
              type="text"
              placeholder='Email or Phone Number'
              name="userName"
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3 pb-3">
            <Form.Control
              className='fw-light ps-0 border-0 border-5 border-bottom border-light-subtle shadow-none'
              type="password"
              placeholder='Password'
              name="password"
            />
          </Form.Group>
          <Row className='d-flex justify-content-between align-content-center'>
            <Col>
              <Button
                variant="danger"
                className="fw-bold mt-4 w-75"
              >
                Log in
              </Button>
            </Col>
            <Col>
              <Button
                variant=""
                className="text-danger mt-4 w-100"
              >
                Forgot password?
              </Button>
            </Col>
          </Row>
        </Form>
      </Box>


    </Box>
  )
}

export default ProfileContent
