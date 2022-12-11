import React from 'react'
import bg from '../../images/about.png'
import { Typography, Box, Button } from '@mui/material'


const About = () => {
    return (
        <div >
            <Box sx={{
                marginTop: "40px",
                backgroundImage: `url(${bg})`,
                flexGrow: "1",
                width: "100%",
                minHeight: '30em',
                textAlign: 'left',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
                <Box sx={{
                    paddingLeft: "50px",
                    paddingTop: "50px"
                }}>
                    <Box>
                        <Typography variant='h2' sx={{
                            color: "white",
                        }}>
                            ABOUT BRONX
                        </Typography >
                        <Typography variant='h6' sx={{
                            color: "white",
                            marginTop: "20px",
                            maxWidth: "600px"
                        }}>
                            We’re not here to carry you to fitness, we’re here to motivate you to carry yourself to your goals.

                            If you’re not sure what your goals are, or don’t know where to start on your fitness journey, come in and speak to one of our qualified trainers who can help you develop a plan.
                        </Typography>
                    </Box>
                    <Box sx={{
                        paddingTop: "30px"
                    }}>
                        <Button sx={{
                            background: "#f40606",
                            color: "white",
                            marginTop: "30px",
                            "&:hover": {
                                background: "red",
                                borderBottom: "2px solid white"
                            }
                        }}>SCHEDULE</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default About