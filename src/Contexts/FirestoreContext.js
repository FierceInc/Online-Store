import {arrayRemove, arrayUnion, doc, getDoc,setDoc, updateDoc} from 'firebase/firestore'
import {  createContext, useContext} from "react";
import { db } from '../firebaseConfiguration';

const Database = createContext()
export const useDatabase = () => useContext(Database)

export const DatabaseProvider = ({ children }) => {

  const createUserInDB = async(userId,username, email) => {
      try {
       let docRef = await setDoc(doc(db, "users", `${userId}`), {
            id: userId,
            username: username,
            email: email,
            cart: [],
            wishlist: []
        });
        return docRef

      } catch (error) {
          console.log(error)
      }
  }
  const getData = async (userId) => {
    const docRef = doc(db, "users", `${userId}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log("No such document!");
  }
  }
  const removeFromUserCart = async(userId, item) => {
    const docRef = doc(db, "users", `${userId}`)
    await updateDoc(docRef, {
     cart: arrayRemove(item)
    })

  }
  const addToUserCart = async(userId, item) => {
    const docRef = doc(db, "users", `${userId}`)
    await updateDoc(docRef, {
      cart: arrayUnion(item)
    })
  }
  const addToUserWishlist = async(userId, item) => {
    const docRef = doc(db, "users", `${userId}`)
    await updateDoc(docRef, {
      wishlist: arrayUnion(item)
    })
    console.log("added")
  }

  const removeFromUserWishlist= async(userId, item) => {
    const docRef = doc(db, "users", `${userId}`)
    await updateDoc(docRef, {
      wishlist: arrayRemove(item)
    })
    console.log("removed")
  }

  
    const value = {
        createUserInDB,
        getData,
        addToUserCart,
        addToUserWishlist,
        removeFromUserCart,
        removeFromUserWishlist,
    }
    return (
        <Database.Provider value={value}>
            {children}
        </Database.Provider>
    );
}
