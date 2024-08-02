import React from "react";
import {Link} from "react-router-dom";
import "../pages/page.css"

export const Signup = () => {
    return(
        <div>
            
            <div className="overall_container">
                
                <div className="big_sign_up_container">
                    <div className="sign_up_container">
                        <p className="profile_head">Create An Account</p>
                        <form className="sign_up_form" action="">
                            <input type="text" placeholder="Name" required />
                            <input type="text" placeholder="Surname" required />
                            <input type="text" placeholder="House Address" required />
                            <input type="email" placeholder="Email Address" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                        <p className="already_have_account">Don`t have an Account. <Link to="/Profile">Sign In</Link></p>
                    </div>
                </div>
            </div>

            <footer>
                &copy;2024 #VANLIFE
            </footer>
        </div>
    );
};