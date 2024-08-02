import React from "react";
// import aboutHomeBg from "../images/image-54.png"
import "../pages/page.css"
import {NavLink} from "react-router-dom";

export const About = () => {
    return(
        <div>
            <div className="about_hero_bg"></div>
            <div className="overall_container">
                <div className="about_hero_text">
                    <p className="about_hero_head">Don’t squeeze in a sedan when you could relax in a van.</p>
                    <p className="about_hero_par">Our mission is to enliven your road trip with the perfect travel van rental. Our vans
                        are recertified before each trip to ensure your travel plans can go off without a hitch.
                        (Hitch costs extra 😉)
                        <br/> <br/>
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>
                <div className="explore_our_vans">
                    <div className="explore_overlay">
                        <p className="explore_vans_text">Your destination is waiting. <br />Your van is ready.</p>
                        <NavLink to="/vans"><button className="explore_btn">Explore Our Vans</button></NavLink>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <footer>
                &copy;2024 #VANLIFE
            </footer>
        </div>
    );
};