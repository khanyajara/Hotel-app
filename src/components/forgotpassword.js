import React, { useState } from "react";
import "./forgotpassword.css";

import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../redux/authSlice";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { error: authError, loading } = useSelector((state) => state.auth);

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleContinue = async () => {
    if (!email) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Invalid email format");
    } else {
      setError("");
      try {
        await dispatch(resetPassword({ email })).unwrap(); 
        alert("Password reset link sent!");
        
      } catch (error) {
        setError(error.message || "Failed to send password reset link");
      }
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password">
        
        <div className="forgot-password-inputs">
          <div className="forgot-password-section-A">
            <h1>Forgot Password</h1>
            <p>Please enter your email address.</p>
          </div>
          <div className="forgot-password-section-B">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading} 
            />
            {error && <p className="forgot-password-error">{error}</p>}
            {authError && <p className="forgot-password-error">{authError}</p>} 
          </div>
          <div className="forgot-password-section-C">
            <button 
              className="forgot-password-button" 
              onClick={handleContinue} 
              disabled={loading} 
            >
              {loading ? "Sending..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
