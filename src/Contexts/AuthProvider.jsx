import { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

export default function AuthProvider({ children }) {


  const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signOutUser = () => {
        return  signOut(auth)
    }



    // onAuthStateChanged(auth, (currentUser) =>{
    //     if(currentUser){
    //       console.log("has current user", currentUser);
    //     }
    //     else{
    //       console.log('Logout', currentUser);
    //     }
    // })


    useEffect(() =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('current user inside useEffect on auth state change', currentUser);
        setUser(currentUser)
      })

      return () => {
        unSubscribe();
      }
    })

    const userInfo = {
      user,
      createUser,
      userLogin,
      signOutUser
    }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

