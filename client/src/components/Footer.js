import { FacebookRounded, Rectangle, Twitter, YouTube} from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    
    <Box>
        <Box
        sx={{
            width:'100%',
             background:'rgba(165, 213, 200, 0.4)' ,
             height:'35em', 
             display:'flex',
             flexDirection:'row',
             justifyContent: 'space-between',
             alignItems: 'right',

    }}
        >
            <Box
            sx={{
                 height: '95%',
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',


            }}
            >
            <Box
            sx={{
                
                 height: '10%',
                width: '80%',
            }}
            >
                <Typography variant="h3"> BUFFER </Typography>

            </Box>

            <Box
            sx={{
                
                 height: '30%',
                width: '80%',
            }}
            >
                <Typography>Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, </Typography>

            </Box>


            <Box
             sx={{
                width:'70%',
                height:'2.5em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'right',
              }}
            >
                <YouTube/>
                <Twitter/>
                <FacebookRounded/>
                <YouTube/>
            </Box>

</Box>



            


              <Box sx={{
                 height: '95%',
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',


            }}>
              <Box height="30%" display="flex"  flexDirection="column"
              
              >  
              <Box
              sx={{
                width:'80%',
                height:'5em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Typography variant="h4">Features</Typography>
              </Box>


              <Box
                
                sx={{ width: '3.125em', height: '0.25em',background:'#51A387' }}
                
              ></Box>
                </Box>


             <Box
             sx={{
                
                height:'50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems:'center'

             }}
             >
              <Box 
              sx={{
                width:'100%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                 justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>  <Button>  <Typography color="black">Shipping</Typography></Button>
              </Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">buying</Typography></Button>
              </Box>


              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">selling</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">transportation</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">tender</Typography></Button></Box>

              </Box>

            </Box>




            <Box sx={{
                 height: '95%',
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',


            }}>
              <Box height="30%" display="flex"  flexDirection="column"
              
              >  
              <Box
              sx={{
                width:'80%',
                height:'5em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Typography variant="h4">Product</Typography>
              </Box>


              <Box
                
                sx={{ width: '3.125em', height: '0.25em',background:'#51A387' }}
                
              ></Box>
                </Box>


             <Box
             sx={{
                
                height:'50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems:'center'

             }}
             >
              <Box 
              sx={{
                width:'100%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                
                alignItems: 'center',
              }}>   <Button><Typography color="black">chemical2</Typography></Button>
              </Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">chemical3</Typography></Button>
              </Box>


              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">chemical4</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">chemical5</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">chemical6</Typography></Button></Box>

              </Box>

            </Box>





            <Box sx={{
                 height: '95%',
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',


            }}>
              <Box height="30%" display="flex"  flexDirection="column"
              
              >  
              <Box
              sx={{
                width:'80%',
                height:'5em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Typography variant="h4">Resources</Typography>
              </Box>


              <Box
                
                sx={{ width: '3.125em', height: '0.25em',background:'#51A387' }}
                
              ></Box>
                </Box>


             <Box
             sx={{
                width:'80%',
                height:'50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems:'center'

             }}
             >
              <Box 
              sx={{
                width:'100%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>    <Button><Typography color="black">Pricing</Typography></Button>
              </Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">For Teams</Typography></Button>
              </Box>


              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Knowledge Base</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Blog</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Dashboard</Typography></Button></Box>


              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Google API Service Usage Disclosure</Typography></Button></Box>

              </Box>

            </Box>




              <Box sx={{
                 height: '95%',
                width: '20%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',


            }}>
              <Box height="30%" display="flex"  flexDirection="column"
              
              >  
              <Box
              sx={{
                width:'80%',
                height:'5em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              >
                <Typography variant="h4">Company</Typography>
              </Box>


              <Box
                
                sx={{ width: '3.125em', height: '0.25em',background:'#51A387' }}
                
              ></Box>
                </Box>


             <Box
             sx={{
                width:'80%',
                height:'50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems:'center'

             }}
             >
              <Box 
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>    
              
              <Button>
              <Typography color="black">About Us</Typography>
              </Button>
              </Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              >
                <Button>
                <Typography color="black">Jobs</Typography></Button>
              </Box>


              <Box
              sx={{
                width:'90%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Press & Media</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Release Notes</Typography></Button></Box>

              <Box
              sx={{
                width:'70%',
                height:'2em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
              ><Button><Typography color="black">Term of Use</Typography></Button></Box>

              </Box>

            </Box>
            


        </Box>




            <Box
            sx={{
            width:'100%',
             background:'#464646' ,
             height:'5.5625em'
            }}
            >



            </Box>
        



        
    </Box>


  )
}

export default Footer