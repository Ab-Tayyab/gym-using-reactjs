import { Typography, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import ClassesApi from './classesApi'
import Changes from '../ready changes/Changes'


const AllClasses = () => {
    return (
        <>
            <div style={{
                textAlign: "center",
                marginTop: "47px",
                paddingTop: "10px",
                background: "black",
                marginBottom: "2px",
                color: "white"
            }}>
                <Typography variant='h3' sx={{
                    fontWeight: "800px",
                    marginTop: "40px",
                }}>
                    CLASSES
                </Typography>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                    padding: "40px",
                }}>
                    {
                        ClassesApi.map((item, i) => {
                            return (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Card sx={{
                                        maxWidth: 620,
                                        cursor: "pointer"
                                    }}>
                                        <img src={item.url} alt="" width="100%" height="350px" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
            <Changes />
        </>
    )
}
export default AllClasses