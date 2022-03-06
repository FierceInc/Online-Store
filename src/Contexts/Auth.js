import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "../firebaseConfiguration";
export const Auth = createContext()

 export const useAuth = () => {
     return useContext(Auth)
 }

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("");
     
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
        }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
useEffect(() => {
const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      });
 
      return unsubscribe
})
   
    const value = {
        currentUser,
        loginUser,
        createUser,
        resetPassword
    }
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    );
}

