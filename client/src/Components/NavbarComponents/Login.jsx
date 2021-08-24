import React from 'react'
import './Stylesheets/login.css'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <Link to={props.link}> <div className='login-button'>
      <div className="animated-button1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        {props.message}
      </div>
    </div>
   </ Link>
  )
}

export default Login
