import React from 'react'
import {Box, Stack, Typography, Button, Checkbox} from '@mui/material'
import Footer from './Footer'
const Signup = () => { 
  return (
    <Box>
        <Stack sx={{height : "120px", width : "500px", marginTop : "100px", marginLeft : "500px"}}>
            <Stack>
                <img 
                    style={{ height : "100px", width : "100px", margin : "auto"}} 
                    src="https://cdn-icons-png.flaticon.com/512/272/272456.png" 
                    alt="sign-in image"
                />

                <Typography textAlign = "center" marginTop = "5px" marginBottom = "50px" variant="h4">Sign Up</Typography>

                <Stack sx={{justifyContent: "space-between"}} direction="row" spacing={2}>
                    <input style={{ padding : "15px", marginTop : "20px", height : "50px", fontSize : "16px"}} type="name" placeholder='First Name *'></input>
                    <input style={{ padding : "15px", marginTop : "20px", height : "50px", fontSize : "16px"}} type="name" placeholder='Last Name *'></input>
                </Stack>

                <input style={{ padding : "15px", marginTop : "20px", height : "50px", fontSize : "16px"}} type="email" placeholder='Email Address *'></input>
                <input style={{ padding : "15px", marginTop : "20px", height : "50px", fontSize : "16px"}} type="password" placeholder='Password *'></input>
                <Stack direction="row" sx = {{marginTop : "25px"}}>
                    <Checkbox id="checking" color="success"/>
                    <label htmlFor='checking' style={{cursor : "pointer"}}>
                        <Typography >I want to receive inspiration, marketing promotions and updates via email.</Typography>
                    </label>
                </Stack>
                <Button sx = {{marginTop : "25px", backgroundColor : "#00FFCA", color : "black", '&:hover' : {backgroundColor : "#00FFCA"}}} variant="contained">Sign Up</Button>
            </Stack>
        </Stack>
        <Footer/>
    </Box>
  )
}

export default Signup
