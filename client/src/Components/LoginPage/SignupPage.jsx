import React from 'react'
import './LoginPage.css'
const LoginPage = () => {
    return (
        <div className="wrapper">
	           
               <div className="container_p">
               <h1 className="login-heading">Login</h1>
		
                <form className="form">
                <input type="text" placeholder="email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit" id="login-button">Login</button>
                <br></br>
                <a href="login"  className="dont_have_an_account">Already have an account?</a>
                </form>
                </div>
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
		            <li></li>
	            </ul>
        </div>
    );
}

export default LoginPage;
