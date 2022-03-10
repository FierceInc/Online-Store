import Login from "../Accounts/Login";
import SignUp from "../Accounts/SignUp";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import {useAuth} from '../Contexts/Auth'
const Account = () => {
  let location = useLocation();
  const {loading} = useAuth()
  if(loading) {
    return <div className="splash"/> 
} 
else {
        switch (location.pathname) {
          case "/login":
            return <Login />;
          case "/signup":
            return <SignUp />;
          default:
            return <NotFound />      }
    }
};

export default Account;
