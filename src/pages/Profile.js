import UserProfile from "../UserProfile/userProfile";
import UpdateProfile from "../UserProfile/updateProfile"
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import { useAuth } from "../Contexts/Auth";
const Profile = () => {
  let location = useLocation();
  const {loading} = useAuth()
  if(loading) {
    return <div className="splash"/> 
} 
else {
    
        switch (location.pathname) {
          case "/user":
            return <UserProfile />;
          case "/update-user":
            return <UpdateProfile />;
          default:
            return <NotFound />
        }
       
    }
};

export default Profile;
