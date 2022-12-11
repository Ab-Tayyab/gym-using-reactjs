import { Box, Button, Typography, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Changes from '../ready changes/Changes'

const Workout = () => {
    return (
        <>
        <div style={{
            paddingTop: "100px",
            background: "black",
            color: "white",
            textAlign: "justify"
        }}>
            <Typography variant='h3' textAlign="center">
                Personal Workout
            </Typography>
            <Grid container >
                <Grid item xs={12} sm={6} md={6} >
                    <Box maxWidth="80%" margin="auto" paddingTop="100px" >
                        <Typography variant='h4'>
                            MATTHEW HERON
                        </Typography>
                        <Typography lineHeight="2em">
                            Mathew is the expert to talk to if your fitness goal is to lose weight or tone up. Working clients through high-intensity workouts and tailored fitness plans, Mat doesn’t take no for an answer when it comes to your goals.
                        </Typography>
                        <Typography paddingTop="10px" lineHeight="2em">
                            With a background in sports psychology and physical therapy, Matt understands how the mind and body need to work together for you to achieve success.
                        </Typography>
                        <Link to='/schedule' style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                background: "#f40606",
                                color: "white",
                                marginTop: "50px",
                                "&:hover": {
                                    background: "red",
                                    borderBottom: "2px solid white"
                                }
                            }}>Schedule Workout</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box paddingTop="50px" margin="auto">
                        <img src={"images/workout/workout1.png"} alt="" style={{
                            width: "80%",
                            height: "600px",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} />
                    </Box>
                </Grid>
            </Grid>

            <Grid container >

                <Grid item xs={12} sm={6} md={6}>
                    <Box paddingTop="50px" margin="auto">
                        <img src={"images/workout/workout2.png"} alt="" style={{
                            width: "80%",
                            height: "600px",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Box maxWidth="80%" margin="auto" paddingTop="100px">
                        <Typography variant='h4'>
                            JOHN HEERON
                        </Typography>
                        <Typography lineHeight="2em">
                            Whether you’re new to boxing or a seasoned fighter, John can teach you a thing or two about keeping fit for the ring and understanding your opponent.
                        </Typography>
                        <Typography paddingTop="10px" lineHeight="2em">
                            While he comes from the world of professional boxing, John takes a holistic approach to fitness, and is just as likely to throw you into a yoga class as he is to throw you around the boxing ring.
                        </Typography>
                        <Link to='/schedule' style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                background: "#f40606",
                                color: "white",
                                marginTop: "50px",
                                "&:hover": {
                                    background: "red",
                                    borderBottom: "2px solid white"
                                }
                            }}>Schedule Workout</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={12} sm={6} md={6} >
                    <Box maxWidth="80%" margin="auto" paddingTop="100px">
                        <Typography variant='h4'>
                            INNA GEBROW
                        </Typography>
                        <Typography lineHeight="2em">
                            Are you looking to improve your and joint strength? Then you should get in touch within Inna for a consultation.
                        </Typography>
                        <Typography paddingTop="10px" lineHeight="2em">
                            A highly trained instructor for both yoga and pilates, Inna can help you better understand your own body, and will help guide you towards your goals in a way that works with your body instead of against it.
                        </Typography>
                        <Link to='/schedule' style={{
                            textDecoration: "none",
                        }}>
                            <Button sx={{
                                background: "#f40606",
                                color: "white",
                                marginTop: "50px",
                                "&:hover": {
                                    background: "red",
                                    borderBottom: "2px solid white"
                                }
                            }}>Schedule Workout</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box paddingTop="50px" margin="auto">
                        <img src={"images/workout/workout3.png"} alt="" style={{
                            width: "80%",
                            height: "600px",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} />
                    </Box>
                </Grid>
            </Grid>
        </div>
        <Changes />
        </>
    )
}

export default Workout