import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import RectangleIcon from '@mui/icons-material/Rectangle'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

function ProductContent() {
  const [value, setValue] = React.useState(2)

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RectangleIcon sx={{ marginRight: '8px', color: '#DB4444', marginTop: '50px' }} />
          <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#DB4444', marginTop: '50px' }}>
            Today's
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: '700', fontSize: '30px', marginTop: '10px' }}>
          Flash Sales
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
            gap: 2, // Adjust this to reduce or increase the gap between cards
          }}
        >
          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://www.ultratech.com.bd/image/cache/catalog/gamepad/havit/hv-g92/havit-hv-g92-gamepad-500x500.jpg.webp"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  HAVIT HV-G92 Gamepad
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $120
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $200
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfHgpp3ogrRulA3tBNLxaIJaOyEeHs6wu-sNBwSiujrtjn9STlAKY~5~bxtQb1FLqZSotB7awrU3EgKxy7thXZxRgrdAa7wqW2qrgerV7Q4ynYlqFChSMuHevXu5SQmQYUomJtgNrwhd7-9TXC1eDwhZbkZyw4S9mbF0uB9SJ-YzZwkgwmU4lwMuL1ZS8XYHveAeX6malHkeRwKWtpPisuazqA6aOvvkDNM5C5tkcP6pLCh9zSbPzlictJm-IDCMEDeynD-BIc9ZuhNoUAUQxG7~rQsqX1JPpRB-DnyOhdWkaIqhIj96foQRFAD6-f~fwJotZZXMZv6ksBT90P5u3Q__"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  AK-900 Wired Keyboard
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $960
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $200
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VYgjS6VcvwQeFQvSI5ZALE-LqgTjCuOt5TIND1hmCWwTOYX-SROP9uKa2ZHgDfvBVS6chDjyouhJ71qA-ZBc2sYMedaGGVioY449r2RQ0ywGhqA3oqtEsSom-2yeh2P6jAJKm~nffJnhPSuweQM3d-L~3G725M97GtVyqKIlM0IFxpJ5vvlrATgrzMKByYMt~EHipZc-W1wTYc7tvHrp7GHCm5VSJ8iVjY9xtcvDUwbjpW86Jc5jw-EkM7-Qa6x8M97GfBk6wzgcYPP-36F4IB9GygVzs-SIYzDBbeRGhswsgrbH0tsCJgOKn7Q8kg8VdiRLi3ewSfo-SBOZCWkAKQ__"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  IPS LCD Gaming Monitor
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $370
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $400
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://s3.dutchcrafters.com/product-images/pid_67683-Amish-Twisp-Mid-Century-Modern-Lounge-Chair-70.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  S-Series Comfort Chair
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $375
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $400
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
          marginBottom: '50px'
        }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#DB4444',
              '&:hover': {
                backgroundColor: '#b83838'
              }
            }}
          >
            View All Products
          </Button>

        </Box >
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RectangleIcon sx={{ marginRight: '8px', color: '#DB4444' }} />
          <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#DB4444' }}>
            This Month
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: '700', fontSize: '30px', marginTop: '10px' }}>
          Best Selling Products
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
            gap: 2 // Adjust this to reduce or increase the gap between cards
          }}
        >
          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://bizweb.dktcdn.net/100/448/472/products/128-1665474213077.jpg?v=1719924308020"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  The north coat
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $260
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $360
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://kicksgaleria.com/wp-content/uploads/2022/10/tui-Gucci-Horsebit-1955-mini-bag-%E2%80%8E699296-92TCG-8563-01.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Gucci duffle bag
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $960
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $1160
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gR5RNyNA5jBsi~hpAN3G7OXg86oqJMqUFRtojTNzSGNiDP27yoyDVK3I38uJhftJiQM1DH8b0PTUq4N2ybvuf7ngQSt~KRFLg0kFcOMVxLZ98PaVPnCEK64g8c~n3-oKhsexdG-IcJbdDU8A4tDY8LohCx6MfSnI6Aw1fQ1e0KMx0Je9C9H7FzS9lh9A0srw~2rGAR3IVRMkdhOKnFp-H4sIzqMivqeGKnBgs7FYLJFgilbmd22NEL~0mU3wS96fRBoE~Pk2-An4jSpKt43Tol6BoMBhmoyh0Ray5ot35HEx9hiqNIYrlPHwhNXG23Q6Mk11JEwHjmkfate1XKH~nA__"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  RGB Liquid CPD Cooler
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $160
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textDecoration: 'line-through' }}
                  >
                    $170
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="200" // Increased height of the image
                image="https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egmSyJeAYxnN4kd~uLyIyvna-vJD2OkfsaJEMyErNoE~abSbFoaBwQ6DsdBIsD1H6jhcxSFCjL-rYlu~N~TujPv5k2Pyhrq4UQyBks9COnrG9ZMXEgkcLteFPnGd3jNTQ5Jagzt99DeTNgrxrJqGe3~SzbZpit8TFTHqNJ0PL5CgbrvcDvsPaKWE03ZC85yXyh7ItFjNVmRkLf6HIAt6qcAk-q-2-TeagC~OC-81WepS6Mj2n5oSN239neLkQrn86gc-WlSNReUiqPG~JyIjbJG9jIGFAN-w42zCliCfOa-d-dPeh8gzqrW1LRlwmJDFUdk9tMOFwhukFTUAwyemdA__"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Small BookSelf
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">
                    $360
                  </Typography>
                </Box>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
          marginBottom: '50px'
        }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#DB4444',
              '&:hover': {
                backgroundColor: '#b83838', // Slightly darker shade for hover effect
              },
            }}
          >
            View All Products
          </Button>

        </Box >

        <Box sx={{ position: 'relative', width: '100%' }}>
          <img
            src='https://vn.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dwdea8e3f3/home-hero-carousel/2024/Spinner_BT_PC.jpg'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <Typography
            sx={{
              position: 'absolute',
              top: '40%',
              left: '18%',
              transform: 'translate(-50%, -50%)',
              color: 'white', // Change the color as needed
              fontSize: '35px', // Adjust font size as needed
              fontWeight: 'bold',
              // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional shadow for better readability
            }}
          >
            INTRODUCING JBL SPINNER<br /> BT CHARCOAL PLAYER
          </Typography>
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '13.7%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '15px',
              marginTop: '15px'
            }}
          >
            Breathe new life into your vinyl record collection.
          </Typography>
          <Button
            sx={{
              position: 'absolute',
              top: '65%',
              left: '7.4%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#ff4f00', // Customize the button color
              color: 'white', // Text color
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
              borderRadius: '50px', // Rounded corners
              '&:hover': {
                backgroundColor: '#ff7b33', // Hover effect color
              },
            }}
          >
            Learn More
          </Button>
        </Box>


        <Box Box sx={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }}>
            <RectangleIcon sx={{ marginRight: '8px', color: '#DB4444' }} />
            <Typography sx={{ fontWeight: '700', fontSize: '30px', color: '#DB4444' }}>
              Our Products
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: '700', fontSize: '30px', marginTop: '10px' }}>
            Explore Our Products
          </Typography>
          <Box display={'flex'} flexDirection={'column'} gap={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '30px',
                gap: 2, // Adjust this to reduce or increase the gap between cards
              }}
            >
              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://omni.pet/cdn/shop/files/AdultBag_1.jpg?v=1693996644&width=416"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Breed Dry Dog Food
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $100
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://cf.shopee.vn/file/vn-11134207-7qukw-ljdmp3s3rqbwd0"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      CANON EOS DSLR Camera
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $360
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://bestmart.cl/cdn/shop/products/Disenosintitulo_49_800x.jpg?v=1655917426"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      ASUS FHD Gaming Laptop
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $700
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://images.ctfassets.net/mdcr7mahi0vp/2lbkYIRHPyiVNPkVTSBbsF/76d04bc23bf9231838e8792f07282149/bo.jpeg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Curology Product Set
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $500
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://d3r47b04tm9cwy.cloudfront.net/product-images/BRD209-BL-1.webp"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Kids Electric Car
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $960
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '30px',
                gap: 2 // Adjust this to reduce or increase the gap between cards
              }}
            >
              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/641c2ad1-800d-469a-9b5b-55b69ec6be60/phantom-luna-2-elite-electric-fg-high-top-football-boot-X0prFC.png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Jr. Zoom Soccer Cleats
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $1600
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      GP11 Shooter USB Gamepad
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $660
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://bizweb.dktcdn.net/100/448/472/products/4b167e6a-f9c5-41b3-8d2f-438be5396c5d.jpg?v=1719924308020"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Quilted Satin Jacket
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $700
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwe8d235e6/JBL_Flip5_Product%20Photo_Side_MidnightBlack-1605x1605-DS3.png?sw=537&sfrm=png"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      JBL Flip 5
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $500
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>

              <Card sx={{ width: 320, height: 350 }}> {/* Increased width and height */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200" // Increased height of the image
                    image="https://songlongmedia.com/media/lib/22-02-2022/tainghesonylinkbudswf-l900trulywirelesssonglongmedia1.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Sony Linkbuds WF-L900
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        $960
                      </Typography>
                    </Box>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                      <Rating name="read-only" value={value} readOnly />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>

          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            marginBottom: '50px'
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#DB4444',
                '&:hover': {
                  backgroundColor: '#b83838', // Slightly darker shade for hover effect
                },
              }}
            >
              View All Products
            </Button>

          </Box >
        </Box >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '150px' }}>
            <LocalShippingIcon sx={{ fontSize: 80 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '30px', marginTop: '8px' }}>FREE AND FAST DELIVERY</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 17, marginTop: '5px' }}>Free delivery for all orders over $140</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '150px' }}>
            <SupportAgentIcon sx={{ fontSize: 80 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '30px', marginTop: '8px' }}>24/7 CUSTOMER SERVICE</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 17, marginTop: '5px' }}>Friendly 24/7 customer support</Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '150px' }}>
            <PrivacyTipIcon sx={{ fontSize: 80 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '30px', marginTop: '8px' }}>MONEY BACK GUARANTEE</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 17, marginTop: '5px' }}>We return money within 30 days</Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default ProductContent