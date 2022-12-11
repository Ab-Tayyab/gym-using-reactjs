import React from 'react'
import { useForm } from "react-hook-form";
import { Typography, Box } from '@mui/material'
import { toast } from 'react-toastify'
import './acount.css'

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ((data) => {
        console.log(data);
        toast.success("Sign Up form submitted")
    })
    return (
        <div style={{
            paddingTop: "50px",
            paddingBottom: "50px",
            background:"black",
            color:"white",
            margin:"67px 0px 2px 0px"
        }}>
            <Typography variant='h3' sx={{
                mb: "20px",
                textAlign: "center"
            }}>Sign Up for a Workout</Typography>
            <Box sx={{
                ml: "25px",
                maxWidth: "700px",
                margin: "auto"
            }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{
                    padding:"0px 50px 0px 50px"
                }}>
                    <label>Name</label>
                    <input {...register("firstName", { required: true, maxLength: 20 })} />
                    <label>Email*</label>
                    <input {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                    {errors.email && <span style={{
                        color: "red"
                    }}>Enter valid Email</span>} <br />
                    <label>Password*</label>
                    <input {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ })} />
                    {errors.password && <span style={{
                        color: "red"
                    }}>Enter valid Password (Testing193!)</span>} <br />
                    <input type="submit"
                        style={{
                            width: "120px",
                            height: "50px",
                            border: "1px solid gray",
                            "&:hover": {
                                background: "black",
                                color: "white",
                            }
                        }} />
                </form>
            </Box>
        </div>
    )
}

export default Signup