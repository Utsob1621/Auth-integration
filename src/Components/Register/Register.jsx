import { Link } from "react-router";
// import { auth } from "../../firebase.init";
// import { createUserWithEmailAndPassword } from "firebase/auth";

    

    const handleRegisterForm = e => {
      e.preventDefault()
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      // console.log(userInfo);

      console.log(name);

      // create a users
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((result) =>{
      //     console.log(result);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })

    }


export default function Register() {
  return (
    <div className="card bg-base-100 w-full mx-auto  max-w-sm shrink-0 shadow-2xl mt-10 p-10">
      <h1 className="text-4xl font-bold ">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegisterForm} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
        <p>
          Already have an account ? Please
          <Link className="text-blue-500 ml-1.5 underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
