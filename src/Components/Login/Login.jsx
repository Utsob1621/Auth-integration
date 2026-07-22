import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Login() {


  const {userLogin} = use(AuthContext)

    const handleLoginForm = e => {
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      // console.log(email, password);

      userLogin(email, password)
        .then((result) => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })

    }

  return (
    <div className="card bg-base-100 w-full mx-auto  max-w-sm shrink-0 shadow-2xl mt-10 p-10">
      <h1 className="text-4xl font-bold ">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLoginForm} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>Create a new account ? Please<Link className="text-blue-500 ml-1.5 underline" to= "/register">Register</Link></p>
      </div>
    </div>
  );
}
