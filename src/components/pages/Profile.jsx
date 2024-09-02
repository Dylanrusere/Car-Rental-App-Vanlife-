import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Import the Firebase auth instance
import "../pages/page.css";

export const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

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

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Define your host credentials
      const hostCredentials = [
        { email: 'dylan@vanlife.com', password: 'dylan@vanlifehost' },
        { email: 'admin@vanlife.com', password: 'admin@vanlifehost' },
        { email: 'host@vanlife.com', password: 'host@vanlifehost' }
      ];

      // Check if the provided credentials match any host credentials
      const isHost = hostCredentials.some(
        (credential) => 
          credential.email === formData.email && 
          credential.password === formData.password
      );

      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);

        if (isHost) {
          navigate("/hostdashboard"); // Redirect to HostDashboard for hosts
        } else {
          navigate("/home"); // Redirect to general user dashboard
        }
      } catch (error) {
        console.error("Login failed:", error);
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setErrors({ general: "Invalid email or password" });
        } else {
          setErrors({ general: "Failed to sign in. Please try again." });
        }
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="overall_container">
        <form className="form_sign_up" onSubmit={handleSubmit}>
          <p className="form_heading">Sign In</p>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              className="password-input"
            />
            <span onClick={toggleShowPassword} className="password-toggle-icon">
              {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
            </span>
            {errors.password && <span>{errors.password}</span>}
          </div>
          {errors.general && <span className="general-error">{errors.general}</span>}
          <button type="submit">Sign In</button>
          <p className="already_have_account">Don't have an Account? <Link to="/Signup">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};
