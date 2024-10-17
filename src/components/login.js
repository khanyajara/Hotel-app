import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../redux/authSlice";
import logo from "../h-removebg-preview.png";
import image1 from '../hotel lobby.jpg';
import { fetchUser } from "../redux/authSlice";
import { getProfile } from "../redux/authSlice";
import Css from './login.css';

const LoginGuest = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, error, loading } = useSelector((state) => state.auth || {});
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const Login = (e) => {
        e.preventDefault();
        dispatch(signIn({ email, password }))
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                
            });
    };
    
    

   useEffect(()=>{
    if(user){
        navigate("/home");
        }

   })

    return (
        <div className="login-container">
            <div className="row1">
                <div className='auth-card'>
                    <img className="img2" src={image1} />
                </div>
                <div className="auth-card">
                    <div className="form">
                        <div><img src={logo} className="logo" /></div>
                        <h2 className="auth-title">Welcome Back</h2>
                        <form className="inputform" onSubmit={Login}>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className="pii"><Link to="/forget-password" className="a">Forgot Password?</Link></p>
                            <div>
                                <button className="submit" type="submit" disabled={loading}>
                                    {loading ? "Loading..." : "Sign-in"}
                                </button>

                                {loading && <h1>Loading...</h1>}
                                {error && <h1>Error: {error}</h1>}
                            </div>
                        </form>
                        <p>If you don't have an account? <Link to="/" className="a" >Sign-up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginGuest;
