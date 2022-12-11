import { Typography, Box, List, ListItem } from '@mui/material'
import React from 'react'
import Changes from '../ready changes/Changes'

const Priceandplans = () => {
    return (
        <>
            <div style={{
                marginTop: "48px",
                marginBottom: "2px",
                padding: "50px 0px 50px 0px",
                color: "white",
                background: "black",
            }}>
                <Typography variant='h3' textAlign="center">
                    Prices and Plans
                </Typography>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                }}>
                    <Box sx={{ width: "40%" }}>
                        <Box sx={{
                            display: "flex",
                            maxWidth: "60%",
                            justifyContent: "space-between",
                            paddingBottom: "20px",
                            flexWrap: "wrap"
                        }}>
                            <Box>
                                <Typography variant='h4'>
                                    BASIC
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4'>
                                    30$
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography >
                                INCLUDED:
                            </Typography>
                            <List>
                                <ListItem>2x group workouts of your choice</ListItem>
                                <ListItem>Unlimited gym access</ListItem>
                                <ListItem>Personal workout</ListItem>
                            </List>
                        </Box>
                    </Box>

                    <Box sx={{ width: "40%" }}>
                        <Box sx={{
                            display: "flex",
                            maxWidth: "60%",
                            justifyContent: "space-between",
                            paddingBottom: "20px",
                            flexWrap: "wrap"
                        }}>
                            <Box>
                                <Typography variant='h4'>
                                    UNLIMITED
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4'>
                                    50$
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography >
                                INCLUDED:
                            </Typography>
                            <List>
                                <ListItem>Unlimited group workouts of your choice</ListItem>
                                <ListItem>Unlimited gym access</ListItem>
                                <ListItem>3x personal workouts</ListItem>
                                <ListItem>Personal nutrition plan</ListItem>
                            </List>
                        </Box>
                    </Box>


                </Box>
            </div >
            <Changes />
        </>
    )
}

export default Priceandplans