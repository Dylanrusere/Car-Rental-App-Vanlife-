import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../pages/page.css";

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const auth = getAuth(); // Get Firebase Auth instance

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = "Username is required";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters";
        }

        if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                navigate("/Profile"); // Redirect to Profile page after successful signup
            } catch (error) {
                console.error("Error signing up:", error);
                if (error.code === 'auth/email-already-in-use') {
                    setErrors({ general: "Email already in use" });
                } else if (error.code === 'auth/weak-password') {
                    setErrors({ general: "Password is too weak" });
                } else {
                    setErrors({ general: "Failed to create an account. Please try again." });
                }
            }
        }
    };

    return (
        <div>
            <div className="overall_container">
                <form className="form_sign_up" onSubmit={handleSubmit}>
                    <p className="form_heading">Create An Account</p>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder='Username'
                            autoComplete='off'
                            onChange={handleChange}
                        />
                        {errors.username && <span>{errors.username}</span>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            autoComplete='off'
                            onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter Your Password'
                            onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                    {errors.general && <span className="general-error">{errors.general}</span>}
                    <button type="submit">Sign Up</button>
                    <p className="already_have_account">Already have an Account? <Link to="/Profile">Sign In</Link></p>
                </form>
            </div>
        </div>
    );
};
