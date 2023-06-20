import { Button } from "@mui/material";
import { auth } from "../firebase-config.js";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      {/* <div className="app-header">
        <h1> Chat App </h1>
      </div> */}

      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <Button variant="contained" sx={{backgroundColor:"green",'&:hover': {  backgroundColor: 'green',}}} onClick={signUserOut}> Sign Out</Button>
        </div>
      )}
    </div>
  );
};
export default AppWrapper