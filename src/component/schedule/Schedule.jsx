import { Grid, Typography } from '@mui/material'
import React from 'react'
import ScheduleApi from './ScheduleApi'
import Changes from '../ready changes/Changes'

const Schedule = () => {
    return (
        <>
            <div style={{
                marginTop: "47px",
                paddingTop: "40px",
                background: "black",
                color: "white",
            }}>
                <Typography variant='h3' textAlign="center">
                    Schedule
                </Typography>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                    padding: "40px",
                }}>
                    {
                        ScheduleApi.map((item, i) => {
                            return (
                                <Grid item xs={12} sm={6} md={6}>
                                    <Typography variant='h3'>{item.day}</Typography>
                                    <Typography paddingTop="20px">{item.time1}</Typography>
                                    <Typography>{item.name1}</Typography>
                                    <Typography paddingTop="30px">{item.time2}</Typography>
                                    <Typography>{item.name2}</Typography>
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

export default Schedule