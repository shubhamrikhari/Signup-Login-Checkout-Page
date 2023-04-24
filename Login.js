import React, {useState} from 'react'
import '../App.css'
import {Stack, Typography, Checkbox, Button} from '@mui/material'
import Footer from './Footer'
const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const d = new Date();
    let year = d.getFullYear();


    const handleClick = (e) => {
        e.preventDefault();
        console.log(email, password, checked)
        setEmail('');
        setPassword('');
        setChecked(false);
    }

  return (
    <>
        <Stack sx={{height : "120px", width : "500px", marginTop : "100px", marginLeft : "500px"}}>
            <Stack>
                <img 
                    style={{ height : "100px", width : "100px", margin : "auto"}} 
                    src="https://cdn-icons-png.flaticon.com/512/272/272456.png" 
                    alt="sign-in image"
                />

                <Typography textAlign = "center" marginTop = "5px" marginBottom = "50px" variant="h4">Sign in</Typography>
            </Stack>
            <input 
                style={{ padding : "15px", marginTop : "20px", height : "50px", fontSize : "16px"}} 
                type="text" 
                placeholder='Email Address *' 
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
            >
            </input>

            <input 
                style={{ padding : "15px", marginTop : "20px", height : "50px", fontSize : "16px"}} 
                type="password" 
                placeholder='Password *' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            >
            </input>

            <Stack direction="row" sx = {{marginTop : "12px", marginLeft : "-8px"}}>
                <Checkbox id="checking" value= {checked} onClick={()=>setChecked(!checked)}/>
                <label htmlFor="checking">
                    <Typography sx={{mt : "10px", fontSize : "16px", cursor : "pointer"}}>Remember me</Typography>
                </label>
            </Stack>
            <Button 
                sx = {{backgroundColor: "#00FFCA", color : "#111", '&:hover' : {backgroundColor : "#00FFCA"}, marginTop : "20px", height : "50px", fontSize : "16px"}} 
                variant="contained"
                onClick={handleClick}
            >
                SIGN IN
            </Button>
            <Stack direction = "row" spacing = {17} sx = {{marginTop : "20px"}}>
                <Typography sx = {{textDecoration : "underline", cursor : "pointer"}} color="primary"> Forgot password?  </Typography>
                <Typography sx={{textDecoration : "underline", cursor : "pointer"}} color="primary">Don't have an account? Sign Up</Typography>
            </Stack>

            <Typography color = "grey" sx={{marginTop : "50px", marginBottom : "50px", textAlign : "center"}}>Copyright <span style={{textDecoration : "underline"}}>Your Website</span> {year}.</Typography>
        </Stack>
        <Footer/>
    </>
  )
}

export default Login
