import { Box, Typography, Button, Grid } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import React from "react";
import mainApi from './mainApi'
import Changes from "../ready changes/Changes";

const Details = () => {
    let { matchid } = useParams();
    let getdata = mainApi.filter((item) => {
        if (matchid == +item.id) {
            return item;
        }
    });
    return (
        <>
        <div style={{
            paddingTop: "100px",
            background: "black",
            color: "white"
        }}>
            {
                getdata.map((item) => {
                    return (
                        <Grid container spacing={5} margin="auto">
                            <Grid item md={6} xs={12}>
                                <Box width="80%" textAlign="left">
                                    <Box marginTop="100px">
                                        <Typography variant="h3"
                                            sx={{
                                                fontFamily: "serif",
                                            }}>{item.name}</Typography>
                                        <Typography variant="h4"
                                            sx={{
                                                fontFamily: "sans-serif",
                                                padding: "20px 0px 20px 0px"
                                            }}>{item.time}</Typography>
                                        <Typography variant="h6"
                                            sx={{
                                                fontFamily: "serif",
                                                lineHeight: "2em",
                                            }}>{item.detail}</Typography>
                                    </Box>
                                    <Link to="/price" style={{
                                        textDecoration: "none"
                                    }}>
                                        <Button sx={{
                                            marginTop: "60px",
                                            background: "#f40606",
                                            color: "white",
                                            "&:hover": {
                                                background: "red",
                                                borderBottom: "2px solid white"
                                            }
                                        }}>
                                            Book Membership
                                        </Button>
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12} sm={6}>
                                <Box width="50%">
                                    <img id="myimage" src={item.img1} alt="" width="170%" />
                                    <img id="myimage" src={item.img2} alt="" width="170%" />
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </div >
        <Changes />
        </>
    );
}
export default Details