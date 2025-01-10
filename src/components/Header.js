import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

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

    return (
        <div className="header">
            <div className="logo">
                <img className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="navitems">
                <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About us</Link></li>
                   <li><Link to="/contact">Contact us</Link></li>
                   <li>Cart</li>
                   <button className="login" onClick={() => {
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