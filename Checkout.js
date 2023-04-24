import React, {useState} from 'react';
import {Box, Stack, Button, Checkbox, Typography, TextField} from '@mui/material';
import Footer from './Footer'
const Checkout = () => {

    const [detail, setDetail] = useState({
        firstname : "",
        lastname : "",
        address1 : "",
        address2 : "",
        city : "",
        state : "",
        zip : "",
        country : ""
    });


    const d = new Date();
    let year = d.getFullYear();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetail({...detail, [name] : value})
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(detail);
    }


  return (
    <Box>
        <Stack sx={{ border : "thin solid #00FFCA", borderRadius : "5px",  padding : "15px 20px", width : "650px", marginTop : "100px", marginLeft : "450px"}}>
            <Typography marginTop = "25px" textAlign="center" variant="h4" >Checkout</Typography>
            <Stack direction = "row" sx = {{color : "111", marginTop : "15px", justifyContent : "space-between"}}>
                <Typography color="#111" ><span style={{backgroundColor : "#00FFCA", color : "#111", borderRadius : "50%", padding : "2px 6px", textAlign : "center"}}>1</span>  Shipping Address</Typography>
                <Typography color="#111" ><span style={{backgroundColor : "#00FFCA", color : "#111", borderRadius : "50%", padding : "2px 6px", textAlign : "center"}}>2</span>  Payment Details</Typography>
                <Typography color="#111" ><span style={{backgroundColor : "#00FFCA", color : "#111", borderRadius : "50%", padding : "2px 6px", textAlign : "center"}}>3</span>  Review your order</Typography>
            </Stack>

            <Typography fontSize="25px" fontWeight="600" marginTop = "35px">
                Shipping Address
            </Typography>

            <Stack sx = {{width : "600px", position : "relative"}}>
                <Stack marginTop = "25px" direction="row" spacing={4}  justifyContent = "space-between">
                    <TextField sx={{width : "60%", color : "#00FFCA"}} value={detail.firstname} onChange={handleChange} name = "firstname" label="First Name *" variant="standard"></TextField>
                    <TextField sx={{width : "60%", color : "#00FFCA"}} value={detail.lastname} onChange={handleChange} name = "lastname" label="Last Name *" variant="standard"></TextField>
                </Stack>
                <TextField marginTop = "25px" name="address1" variant = "standard" label="Address line 1*"></TextField>
                <TextField marginTop = "25px" name="address2" variant = "standard" label="Address line 2"></TextField>
                <Stack direction="row" spacing={3} justifyContent="space-between">
                    <TextField sx={{width : "60%" }} value={detail.city} onChange={handleChange} name="city" variant="standard" label="City *"></TextField>
                    <TextField sx={{width : "60%" }} value={detail.state} onChange={handleChange} name="state" variant="standard" label="State/Province/Region"></TextField>
                </Stack>
                <Stack direction = "row" spacing={4} justifyContent="space-between">
                    <TextField sx={{width : "60%" }} value={detail.zip} onChange={handleChange} name="zip" variant="standard" label="Zip/Postal code *"></TextField>
                    <TextField sx={{width : "60%" }} value={detail.country} onChange={handleChange} name="country" variant="standard" label="Country *"></TextField>
                </Stack>

                <Stack direction="row" marginTop = "20px" marginLeft = "-10px">
                    <Checkbox color="secondary" /> 
                    <Typography marginTop="10px">Use this address for payment details</Typography>
                </Stack>
            </Stack>

            <Button onClick = {handleClick} sx={{marginTop : "25px", margiposition : "relative", left : "550px", width : "60px", textAlign : "center", marginBottom : "6px", backgroundColor : "#00FFCA", color : "#111", '&:hover' : {backgroundColor : "#00FFCA"}}} variant="contained" >NEXT</Button>
        </Stack>
        <Typography color = "grey" sx={{marginTop : "50px", marginBottom : "50px", textAlign : "center"}}>Copyright <span style={{textDecoration : "underline"}}>Your Website</span> {year}.</Typography>
        <Footer/>
    </Box>
  )
}

export default Checkout;
