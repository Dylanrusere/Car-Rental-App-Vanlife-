import React, { useEffect, useState } from "react";
import "../pages/page.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem('username'); // Retrieve the stored username
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div>
            <div className="home_bg_container">
                <div className="overall_container">
                    <p className="hello">Hello {username ? `${username}` : ''}</p>
                    <p className="welcome_text">You got the travel plans, we <br /> got the travel vans.</p>
                    <p className="welcome_par">Add adventure to your life by joining the <strong>#vanlife</strong> movement. <br /> 
                    Rent the perfect van to make your perfect road trip.</p>
                    <NavLink to="/vans"><button className="overall_btn">Find Your Van</button></NavLink>
                </div>
            </div>
            <footer>
                &copy;2024 #VANLIFE
            </footer>
        </div>
    );
};
