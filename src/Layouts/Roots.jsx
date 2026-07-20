import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

export default function Roots() {
  return (
    <div>

        <Navbar></Navbar>
        <Outlet></Outlet>
        
    </div>
  )
}
