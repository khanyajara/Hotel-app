import react, { useState } from "react";
import logo from "../h-removebg-preview.png"
import image1 from '../lobby 1.jpg'
import Css from './register.css'



const Register= ()=>{

    const [fullname,setFullname]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")


    const registerGuest =  async (e)=>{
        e.preventDefault();
        
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
                            value={fullname}
                            />
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
                            <div>
                                <button className="submit">
                                    Create Account
                                </button>
                            </div>
                        </form>
                        <p>If you already have an Account? Log-in</p>
                    </div>
                </div>
</div>
        </div>
    )
}
export default Register;
