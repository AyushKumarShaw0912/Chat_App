import { Mail, Notifications,WhatsApp } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {auth} from "../firebase-config"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {

  return (
    <AppBar position="sticky" sx={{backgroundColor:"green"}}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
     CHAT RAPID
        </Typography>
        <WhatsApp sx={{ display: { xs: "block", sm: "none" } }} />
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={auth.currentUser?auth.currentUser.photoURL:"/broken-image.jpg"}
          />
        </Icons>
        <UserBox >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={auth.currentUser?auth.currentUser.photoURL:"/broken-image.jpg"}
          />
          <Typography variant="span">{auth.currentUser?auth.currentUser.displayName:"User"}</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;