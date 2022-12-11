import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div style={{
            background: "black",
            paddingTop: "100px",
            paddingBottom: "100px",
        }}>
            <Box sx={{
                display: "flex",
                flex:"flexWrap",
                paddingLeft: "50px",
            }}>
                <Box sx={{
                    width: "50%",
                    color: "white",
                    textAlign: "left",
                }}>
                    <Typography variant='h4'>
                        WORKING HOURS
                    </Typography>
                    <Typography>
                        Monday - Friday 5:00 AM - 12:00 AM
                    </Typography>
                    <Typography>
                        Sunday - Saturday 8:00 AM - 10:00 PM
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        width: "250px",
                        justifyContent: "space-between",
                        marginTop: "20px"
                    }}>
                        <InstagramIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                    </Box>
                </Box>
                <Box sx={{
                    color: "white",
                    width: "50%",
                }}>
                    <Typography variant='h4'>
                        ADDRESS
                    </Typography>
                    <Typography>
                        661 Sulphur Springs Ave.
                    </Typography>
                    <Typography>
                        Bronx, NY 10465
                    </Typography>
                </Box>
            </Box>
        </div >
    )
}

export default Footer