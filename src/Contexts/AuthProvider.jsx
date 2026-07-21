import { auth } from "../firebase.init";
import { AuthContext } from "./AuthContext";
import {  createUserWithEmailAndPassword } from "firebase/auth";

export default function AuthProvider({ children }) {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
      createUser
    }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

