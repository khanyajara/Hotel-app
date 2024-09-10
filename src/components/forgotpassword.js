import React from "react";
import css from './forgotpassword.css'


const ForgetPassword=()=>{




    return(
        <div className="container">
            <div className="row2">
                <form>
                    <h2>Forgot your password</h2>
                    <p>Please enter your details to receive password reset link</p>
                    <input
                    type="text"
                    className="email"
                    placeholder="Enter email address" 
                    />
                </form>
            </div>
        </div>
    )
}
export default ForgetPassword;