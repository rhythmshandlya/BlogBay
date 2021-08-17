import './LoginPage.css'
import { React } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from './../../Util/api';
import Loading from '../Extras/Loading';
import { useState } from 'react';
import Navbar from '../NavbarComponents/Navbar';

let cookies = new Cookies();

const SignupPage = () => {
    let history = useHistory();
    const [loading, setLoading] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response =   {
            "name" : `${event.target.name.value}`,
            "email" : `${event.target.email.value}`,
            "description":"NA",
            "niche":"NA",
            "job":"NA",
            "password": `${event.target.password.value}`,
            "confirmPassword" : `${event.target.confirmPassword.value}`
            }
        try {
            setLoading(<Loading />);
            const res = await api.post('user/signup', response);
            setLoading(null);
            //store as cookie
            cookies.set('jwt', res.data.token, { path: '/', maxAge: 2592000, secure: false });
            //redirect to home
            history.push('/home');
        } catch (err) {
            setLoading(null);
            //Error message to popup on screen!
            alert(err.response.data.message||err);
        }
    }

    return (
        <>
        <Navbar/>
        <div className="wrapper">
	           
               <div className="container_p">
               <h1 className="login-heading">Signup</h1>
		
                <form className="form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <button type="submit" id="login-button">Signup{loading}</button>
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
        </>
    );
}

export default SignupPage;
