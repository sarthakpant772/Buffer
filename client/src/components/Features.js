import { Box, Typography } from '@mui/material'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'
import tender from '../images/tender.png'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import shipping from '../images/shipping.png'
import broker from '../images/broker.png'
import driver from '../images/driver.png'
const Features = () => {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: { md: '60vh' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            height: { md: '5.31em' },
            width: { xs: '100%', md: '61em' },
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginBottom: '6em',
          }}
        >
          <Typography variant="h4">What's new in Buffer?</Typography>
          <Typography variant="subtitle2">
            Our Encrypted Tender system put insider trading a total mess
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '100%' },
            height: { md: '31.56em' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              height: '29.31em',
              width: { xs: '70%', md: '25.69em' },
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={one}
              sx={{
                zIndex: '-1',
                position: 'absolute',
              }}
            />
            <Box
              sx={{
                height: '70%',
                width: { xs: '80%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                sx={{ width: '4.38em', height: '4.38em' }}
                src={tender}
              ></Box>
              <Box
                sx={{
                  height: '45%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Tender
                </Typography>
                <Typography variant="subtitle2">
                  We hav introduced online tender that is totally encryoted and
                  is selected when seller wanst his tender to be closed.
                </Typography>
              </Box>
              {/* <Typography variant="subtitle1" sx={{ textAlign: 'start' }}>
                Read More {'>>'}
              </Typography> */}
            </Box>
          </Box>
          {/* 2 */}
          <Box
            sx={{
              height: '29.31em',
              width: { xs: '70%', md: '25.69em' },
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={two}
              sx={{
                zIndex: '-1',
                position: 'absolute',
              }}
            />
            <Box
              sx={{
                height: '70%',
                width: { xs: '80%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                sx={{ width: '4.38em', height: '4.38em' }}
                src={shipping}
              ></Box>
              <Box
                sx={{
                  height: '45%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Shipping
                </Typography>
                <Typography variant="subtitle2">
                  You can now track your order so that you dont have to call
                  your delivery patner alot.
                </Typography>
              </Box>
              {/* <Typography variant="subtitle1" sx={{ textAlign: 'start' }}>
                Read More {'>>'}
              </Typography> */}
            </Box>
          </Box>
          {/* 3 */}
          <Box
            sx={{
              height: '29.31em',
              width: { xs: '70%', md: '25.69em' },
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={three}
              sx={{
                zIndex: '-1',
                position: 'absolute',
              }}
            />
            <Box
              sx={{
                height: '70%',
                width: { xs: '80%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                sx={{ width: '4.38em', height: { xs: '4.38em' } }}
                src={broker}
              ></Box>
              <Box
                sx={{
                  height: '45%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  No Middleman
                </Typography>
                <Typography variant="subtitle2">
                  No trouma to deal with middleman. We have removed the
                  middleman hustel so to increase profit of both the industries
                  at same time.
                </Typography>
              </Box>
              {/* <Typography variant="subtitle1" sx={{ textAlign: 'start' }}>
                Read More {'>>'}
              </Typography> */}
            </Box>
          </Box>

          {/* 4 */}
          <Box
            sx={{
              height: '29.31em',
              width: { xs: '70%', md: '25.69em' },
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={four}
              sx={{
                zIndex: '-1',
                position: 'absolute',
              }}
            />
            <Box
              sx={{
                height: '70%',
                width: { xs: '80%', md: '50%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                sx={{ width: '4.38em', height: '4.38em' }}
                src={driver}
              ></Box>
              <Box
                sx={{
                  height: '45%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  Auction for goods
                </Typography>
                <Typography variant="subtitle2">
                  Driver can make bidding to get what they want to travel from
                  one place to other.
                </Typography>
              </Box>
              {/* <Typography variant="subtitle1" sx={{ textAlign: 'start' }}>
                Read More {'{' >> '}'}
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Features
