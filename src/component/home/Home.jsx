import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import bg from '../../images/home.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{
            paddingTop: "46px"
        }}>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                flexGrow: "1",
                paddingTop: "64px",
                paddingBottom: "20px",
                width: "100%",
                minHeight: '40em',
                textAlign: 'center',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
                <Box sx={{
                    marginTop: "400px"
                }}>
                    <Box>
                        <Typography variant='h2' sx={{
                            color: "white",
                        }}>
                            IT'S ALL ABOUT WHAT YOU CAN ACHIEVE
                        </Typography >
                        <Typography variant='h6' sx={{
                            color: "white",
                            marginTop: "20px"
                        }}>
                            Empower yourself to make the changes you need to make
                        </Typography>
                    </Box>
                    <Box>
                        <Link to='/price' style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                background: "#f40606",
                                color: "white",
                                marginTop: "30px",
                                "&:hover": {
                                    background: "red",
                                    borderBottom: "2px solid white"
                                }
                            }}>Let's Get Started</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
export default Home