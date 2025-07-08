// import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    let btnName = "Login";

    const [buttonName, setButtonName] = useState("Login");
    console.log("Header render");

    // if no dependency array that means useEffect is called on every component render
    // if dependency array is empty = [] => useEffect is called on initial render(just once)
    // 2nd + when something passed in dependency, then useEffect will be called everytime when dependency changes/ updates

    useEffect(() => {
        console.log("useEffect called");
    }, [buttonName]);

    // Subscribing to a store using a useSelector react hook, 

    const cartItems = useSelector((store) => store.cart.items); 


    return (
        <div className="flex justify-between bg-amber-100">
            <div className="">
                <img className="w-18 rounded-4xl m-4 " src={LOGO_URL} ></img>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="m-2 px-4 border-b-amber-950 border-2 font-bold"> <Link to="/grocery">Grocery</Link></li>    
                   <li className="m-2 px-4 border-b-amber-950 border-2 font-bold"><Link to="/">Home</Link></li>
                   <li className="m-2 px-4 border-b-amber-950 border-2 font-bold"><Link to="/about">About us</Link></li>
                   <li className="m-2 px-4 border-b-amber-950 border-2 font-bold"><Link to="/contact">Contact us</Link></li>
                   <li className="m-2 px-4 border-b-amber-950 border-2 font-bold"><Link to="/cart" >Cart ({cartItems.length} items)</Link></li>
                   <button className="login font-bold" onClick={() => {
                    // btnName = "Logout";
                    buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
                    
                   }}>
                    {buttonName}
                   </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;