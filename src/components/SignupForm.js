import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
    }
  };


  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <p>Fill the form below to create your account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter your full name"
            value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter your email"
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter your password"
            value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm your password"
            value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>

      <button className="google-signup">
          <img
            src="https://raw.githubusercontent.com/egattor/registration-form-assets/2885fbe9f434e54942af2feb422dbb7fb5fa7394/google.png"
            alt="Google Logo"
            className="google-icon"
          />
          Sign up with Google
        </button>
      
      <p className="login-link">Already have an account? <a href="/signin">Sign in</a></p>
    </div>
  );
};

export default SignupForm;
