import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/page.css";

export const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Array of valid credentials
  const validCredentials = [
    { email: "dylaneight01@gmail.com", password: "dylanEight" },
    { email: "ennetymarketing@vanlife.co.zw", password: "ennetymarketing@vanlife02" },
    { email: "dylandev@vanlife.co.zw", password: "dylanEight@vanlife0108" },
    { email: "admin@vanlife.co.zw", password: "admin@vanlife01" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleSubmit = (e) => {
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
      const isValid = validCredentials.some(
        (cred) => cred.email === formData.email.trim() && cred.password === formData.password.trim()
      );

      console.log('Validation Result:', isValid); // Debugging line
      if (isValid) {
        navigate("/HostDashboard");
      } else {
        navigate("/");
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
          <button type="submit">Sign In</button>
          <p className="already_have_account">Don't have an Account? <Link to="/Signup">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};
