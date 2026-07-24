import { use } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { Navigate, useLocation } from "react-router";

export default function PrivateRoutes({children}) {

    const {user, loading} = use(AuthContext);
    const location = useLocation()
    
    

    if(loading){
      return <div className="flex justify-center mt-5">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    }

    if(!user){
        return <Navigate state={location?.pathname} to = '/login'></Navigate>
    }

  return children;
}
