import React from 'react'
import {Stack} from '@mui/material';
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <Stack direction="row" style={{ backgroundColor : "#00FFCA", justifyContent : "space-between"}}>
        <img style={{borderRadius : "5px" , height : "40px", width : "80px", margin : "5px 80px"}} src="./images/logo.png" alt="logo"></img>
        <input style={{border : "#00FFCA", padding : "15px", fontSize : "16px", width : "70%", height : "30px", marginTop : "9px", marginRight : "60px", borderRadius : "3px"}} placeholder="Search for items"></input>
        <Stack direction="row" spacing = {5} style={{marginTop : "12px", marginRight : "30px", justifyContent : "space-between"}}>
            <NavLink  style={{color : "black", textDecoration : "none"}} to="/">Login</NavLink>
            <NavLink  style={{color : "black", textDecoration : "none"}} to="/signup">Signup</NavLink>
            <NavLink  style={{color : "black", textDecoration : "none"}} to="/checkout">Checkout</NavLink>
        </Stack>
    </Stack>
  )
}

export default Navbar
