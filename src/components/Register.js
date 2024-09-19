import react, { useState, useEffect } from "react";
import logo from "../h-removebg-preview.png"
import { Link } from "react-router-dom";
import image1 from '../lobby 1.jpg'
import Css from './register.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  signUp } from "../redux/authSlice";
import { async } from "@firebase/util";



const Register= ()=>{

    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const { user, error, loading } = useSelector((state) => state.auth || {});
    
    const navigate=useNavigate();
    
    const dispatch = useDispatch();
    
    const create =  ()=>{
        
          dispatch(signUp({ email, password }))
          alert("Yeah");
            navigate("home"); 
    }
    useEffect(() => {
        if (error) {
            console.error("Error occurred:", error);
        }
        if (user) {
            alert("Yeah");
            navigate("home"); 
    
        }
    }, [user, error, navigate]);
    
    
  
    
    
        
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
                        <form className="inputform" onSubmit={create}>
                            
                            <input
                            type="text"
                            className="input"
                            placeholder="Username"
                           onChange={(e)=> setEmail(e.target.value)}
                            />
                            <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                            <div>
                                <button className="submit" type="submit">
                                    Create Account
                                </button>

                                {loading && <h1>loading...</h1> }
                                {error && <h1> Error: {error}</h1> }
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
