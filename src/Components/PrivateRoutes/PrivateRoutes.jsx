import { use } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { Navigate } from "react-router";

export default function PrivateRoutes({children}) {

    const {user} = use(AuthContext);

    if(!user){
        return <Navigate to = '/login'></Navigate>
    }

  return children;
}
