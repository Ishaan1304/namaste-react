import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {

    //let btnName="Login";
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-36 h-36" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-10">
                    <li className="px-5">Online Status:{onlineStatus? "🟢":"🔴"}</li>
                    <li className="px-5"><Link to="/">Home</Link></li>
                    <li className="px-5"><Link to="/about">About Us</Link></li>
                    <li className="px-5"><Link to="/contact">Contact Us</Link></li> 
                    <li className="px-5"><Link to="/grocery">Grocery</Link></li> 
                    <li className="px-5">Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                    <li className="px-5 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;