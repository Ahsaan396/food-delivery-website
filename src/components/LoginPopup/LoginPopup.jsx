import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h1>{currState}</h1>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === 'Login' ? <></> : <input type="text" placeholder="Name" required />}

                    <input type='paassword' placeholder='Password' required />
                    <input type='emaim' placeholder='Email' required />
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the Terms and Conditions</p>
                </div>
                {currState === 'Login' ?
                    <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                    :
                    <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup