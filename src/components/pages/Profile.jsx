import React from "react";
import {Link} from "react-router-dom";
import "../pages/page.css"

export const Profile = () => {
    return(
        <div>
            
            <div className="overall_container">
                
                <div className="big_sign_in_container">
                    <div className="sign_in_container">
                        <p className="profile_head">Sign In to your Account</p>
                        <form className="sign_in_form" action="">
                            <input type="email" placeholder="Email Address" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Sign In</button>
                        </form>
                        <p className="already_have_account">Don`t have an Account. <Link to="/Signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>

            <footer>
                &copy;2024 #VANLIFE
            </footer>
        </div>
    );
};