import React from 'react'
import {auth,provider} from "../firebase-config"
import {signInWithCredential, signInWithPopup} from "firebase/auth"
import Cookies from "universal-cookie"
import { Avatar, Box, Button, Container, Typography, styled } from '@mui/material'
 const cookies= new Cookies();
 const Des=styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  
})
 export const Auth = ({ setIsAuth }) => {
    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        //console.log(result.user)
        cookies.set("auth-token", result.user.refreshToken);
        setIsAuth(true);
      } catch (err) {
        console.error(err);
      }
    };
   
    return (
     <Des sx={{marginBottom:"13px"}}>
      <Avatar sx={{marginBottom:"13px",width:50,height:50}} src="/broken-image.jpg" />
      <Typography sx={{marginBottom:"13px",color:"white"}} variant='h4'>Sign in with Google</Typography>
      <Button variant="contained"sx={{marginBottom:"13px",backgroundColor:"green",'&:hover': {
          backgroundColor: 'green',}}} onClick={signInWithGoogle} >Sign in</Button>
     </Des>
    );
  };
  //photoURL
export default Auth