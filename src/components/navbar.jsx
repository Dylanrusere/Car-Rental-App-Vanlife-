import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "./navbar.css"

export const Navbar = () =>{
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <nav>
            <Link to="/" className="titleLogo">#CarRental</Link>
            <div className="ham_menu" 
            onClick={() =>{
                setMenuVisible(!menuVisible);
            }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuVisible ? "open" : ""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/vans">Vans</NavLink>
                </li>
                <li>
                    <NavLink to="/profile"><i class="fa-solid fa-right-from-bracket"></i></NavLink>
                </li>
            </ul>
        </nav>
    );
};