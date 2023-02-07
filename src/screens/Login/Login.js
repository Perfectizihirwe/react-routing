import React from 'react'
import './Login.css'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Login= () => {
  
    return (
      <div className='login-wrapper'>
        <div className='login-container'>
          <Link to="/"><AiOutlineClose style={{position: "relative", left: 250, top: -15}}         
          /></Link>
          <h1>Log In</h1>
          <p>Don't have an account? <Link to="/login/Create">Create your account</Link>, it takes less than a minute.</p>
          <label>Username(use: agent)</label>
          <input type={"text"}/>
          <label>Password(use: agent)</label>
          <input type={"text"}/>
          <br></br>
          <div className='login-one'>
          <button style={{backgroundColor: "#011640"}}>LOGIN</button>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div className='login-two'>
          <button style={{backgroundColor: "#1877F2"}}><FaFacebook/>   LOGIN WITH FACEBOOK</button>
          </div>
          <br></br>
          <div className='login-three'>
          <button style={{ backgroundColor: "#C63D2D"}}>LOGIN WITH GOOGLE</button>
          </div>
          
          <p>Lost your Password</p>
        </div>
      </div>
    )
  
}
