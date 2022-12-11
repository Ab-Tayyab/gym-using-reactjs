import { Typography, Button, Card, CardContent, Grid } from '@mui/material'
import { useState } from 'react';
import React from 'react'
import mainApi from '../detail/mainApi'


const imagePerRow = 4;
const Classes = () => {
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  return (
    <div style={{
      textAlign: "center",
    }}>
      <Typography variant='h3' sx={{
        fontWeight: "800px",
        marginTop: "40px",
      }}>
        POPULAR CLASSES
      </Typography>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
        padding: "40px",
      }}>
        {
          mainApi?.slice(0, next)?.map((item, i) => {
            return (
              <Grid item xs={12} sm={6} md={6}>
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
      {next < mainApi?.length && (
        <Button
          onClick={handleMoreImage}
          sx={{
            background: "#f40606",
            color: "white",
            height: "50px",
            width: "200px",
            fontSize: "17px",
            borderRadius: "5px",
            "&:hover": {
              background: "#d43737",
              color: "white"
            }
          }}
        >
          Check All Classes
        </Button>
      )}
    </div>
  )
}
export default Classes