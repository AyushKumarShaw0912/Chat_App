import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase-config";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import "../styles/chat.css"
import { Box, Button, Typography, styled } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Dabba=styled(Box)({
  display: "flex",
    flexDirection:"column",
    alignItems:"center",
    width:"100%",
    margin:"0 auto",
    borderRadius:"5px",
    overflow:"hidden",
    border:"1px solid green",
    color:"#23f407",
    paddingLeft:"20px"
})
export const Chat = ({ room }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <>
    <Dabba>
        <Typography sx={{fontStyle:"italic"}} variant="h3">Welcome to : {room.toUpperCase()}</Typography>
      
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <span className={auth.currentUser.displayName===message.user?"lefy":"user"}>{auth.currentUser.displayName!==message.user?message.user:""}</span> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
          className="new-message-input"
          placeholder="Type your message here..."
        />
     <Button variant="contained" color="success" type="submit" endIcon={<SendIcon/>}>
  Send
</Button>
      </form>
</Dabba>
</>
  );
};
export default Chat