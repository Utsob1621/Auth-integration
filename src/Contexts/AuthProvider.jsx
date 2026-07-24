import { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export default function AuthProvider({ children }) {


  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const signOutUser = () => {
      setLoading(true)
        return  signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
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
        // console.log('current user inside useEffect on auth state change', currentUser);
        setUser(currentUser)
        setLoading(false)
      })

      return () => {
        unSubscribe();
      }
    })

    const userInfo = {
      
      createUser,
      userLogin,
      signOutUser,
      googleSignIn,
      user,
      loading
    }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

