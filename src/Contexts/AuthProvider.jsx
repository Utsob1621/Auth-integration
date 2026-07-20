import { AuthContext } from "./AuthContext";
import {  createUserWithEmailAndPassword } from "firebase/auth";

export default function AuthProvider({children}) {

    const createUser = () => {
        return createUserWithEmailAndPassword(auth)
    }

  return (
    <AuthContext >
      {
        children
      }
    </AuthContext>
  )
}

