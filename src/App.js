import React, { useState, useEffect } from "react";
import  Chat  from "./components/Chat";
import  Auth  from "./components/Auth";
import  AppWrapper  from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css"
import Header from "./components/Header";
import { Box, styled,Button, TextField, Typography } from "@mui/material";


const cookies = new Cookies();
const Des=styled(Box)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  marginBottom:"10px"
  
})

function ChatApp() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <>
      <Header/>
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
      </>
    );
  }

  return (
    <>
  <Header/>
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
    {!isInChat ? (
    <Des>
          <Typography sx={{marginBottom:"23px",color:"white"}} variant='h4'>Enter Room Name</Typography>
          <TextField id="standard-basic"  variant="standard" onChange={(e) => setRoom(e.target.value)}  sx={{marginBottom:"43px",fontSize:"400px",color:"whitesmoke"}} />
          <Button
          variant="contained"
          sx={{marginTop:"10px",backgroundColor:"green",'&:hover':{backgroundColor:"green"}}}
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat Room
          </Button>
          
         </Des>):(
        <Chat room={room}/>)}
    </AppWrapper>
    </>
 
  );
}
//<TextField id="standard-basic" label="Standard" variant="standard" />
//<label> Type room name: </label>
//<input onChange={(e) => setRoom(e.target.value)} />
export default ChatApp;