import react, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../h-removebg-preview.png"
import image1 from '../hotel lobby.jpg'
import ForgetPassword from "./forgotpassword";
import Css from './login.css'



const LoginGuest=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const Login = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            navigate("/home");
        } else {
            alert("Invalid username or password");
            }
    }



return (
    <div className="login-container">
        <div className="row1">
    
                <div className='auth-card' >
                 <img   className="img2" src={image1} />
    
                </div>
                <div className="auth-card">
                    <div className="form">
                        <div><img src={logo}  className="logo"/></div>
                        <h2 className="auth-title">Welcome Back</h2>
                        <form className="inputform" >
                           
                            <input
                            type="text"
                            className="input"
                            placeholder="Username"
                            value={username}
                            />
                            <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            />
                            <p>forgotpassword</p>
                            <div>
                                <button className="submit" onClick={Login}>
                                    Sign-in
                                </button>
                            </div>
                        </form>
                        <p>If you Don't have an Account? <Link to="/">Sign-up </Link></p>
                    </div>
                </div>
</div>
    </div>
)
    
}
export default LoginGuest;