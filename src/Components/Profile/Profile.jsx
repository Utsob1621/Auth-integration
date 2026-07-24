import { use } from "react"
import { AuthContext } from "../../Contexts/AuthContext"

export default function Profile() {

    const { user } = use(AuthContext);

  return (
    <div >
        <ol className="flex justify-center items-center mt-10 text-3xl">
          <li>User email here : {user.email}</li>
        </ol>
    </div>
  )
}
