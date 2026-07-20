// import { createContext, StrictMode } from 'react'
import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Roots from './Layouts/Roots';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Contexts/AuthProvider';


//  export const AuthContext = createContext(null);

//   const userInfo = {
//     email : " pta@alu.com"
//   }


const router = createBrowserRouter([
  {
    path: "/",
    Component : Roots, 
    children : [
      {
        index : true,
        Component : Home
      },
      {
        path : 'register',
        Component : Register
      },
      {
        path : 'login',
        Component : Login
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <AuthContext value={userInfo}>
        <RouterProvider router={router}></RouterProvider>
     </AuthContext> */}
     <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
     
  </StrictMode>,
)
