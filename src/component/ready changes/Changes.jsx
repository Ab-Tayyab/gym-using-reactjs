import { Button, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Changes = () => {
    return (
        <div>
            <Box sx={{
                padding: "100px 0px 100px 100px",
                textAlign: "left"
            }}>
                <Typography variant='h2'>
                    ARE YOU READY FOR CHANGES?
                </Typography>
                <Link to="/signup" style={{
                    textDecoration: "none",
                    color: "black"
                }}>
                    <Button sx={{
                        marginTop: "50px",
                        background: "#f40606",
                        color: "white",
                        height: "50px",
                        width: "250px",
                        fontSize: "17px",
                        borderRadius: "5px",
                        "&:hover": {
                            background: "#d43737",
                            color: "white"
                        }
                    }}>
                        Make It Happen
                    </Button>
                </Link>
            </Box>
        </div>
    )
}

export default Changes