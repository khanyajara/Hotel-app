import react, { useState, useEffect } from "react";
import logo from "../h-removebg-preview.png"
import { Link } from "react-router-dom";
import image1 from '../lobby 1.jpg'
import Css from './register.css'
import { useNavigate } from "react-router-dom";



const Register= ()=>{

    const [fullname,setFullname]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    
    
    const navigate=useNavigate();
    const login=()=> {
        navigate("/home");
    }
    
        

        
        
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div className="auth-container">
<div className="row">
    
                <div className='auth-card' >
                 <img   className="img" src={image1} />
    
                </div>
                <div className="auth-card">
                    <div className="form">
                        <div><img src={logo}  className="logo"/></div>
                        <h2 className="auth-title">Create an Account</h2>
                        <form className="inputform" >
                            <input
                            type="text"
                            className="input"
                            placeholder="Full Name"
                            
                            />
                            <input
                            type="text"
                            className="input"
                            placeholder="Username"
                           
                            />
                            <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            
                            />
                            <div>
                                <button className="submit" onClick={login}>
                                    Create Account
                                </button>
                            </div>
                        </form>
                        <p>If you already have an Account?<Link to="./login.js" > Log-in</Link></p>
                    </div>
                </div>
</div>
        </div>
    )
}
export default Register;
