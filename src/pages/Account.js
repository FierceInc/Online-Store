import React, { useEffect, useState } from "react";
import Login from "../Accounts/Login";
import SignUp from "../Accounts/SignUp";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";
const Account = () => {
  let location = useLocation();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    let time = setTimeout(() => {
        setLoader(false)
    }, 2000)
      return () => {
         clearTimeout(time)
      };
  }, []);

  if(loader) {
    return <div className="splash"/> 
} 
else {
  return (
    <>
      {(() => {
        switch (location.pathname) {
          case "/login":
            return <Login />;
          case "/signup":
            return <SignUp />;
          default:
            return <NotFound />
        }
      })()}
    </>
  );
    }
};

export default Account;
