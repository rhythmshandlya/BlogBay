import './LoginPage.css'
import { React,useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from './../../Util/api';
import Loading from '../Extras/Loading';
import Navbar from './../NavbarComponents/Navbar'

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

let cookies = new Cookies();

const LoginPage = () => {
        let history = useHistory();
        const [loading, setLoading] = useState(null);
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            const response = {
                "email": `${event.target.email.value}`,
                "password": `${event.target.password.value}`,
            }
            try {
                setLoading(<Loading />);
                const res = await api.post('user/login', response);
                setLoading(null);
                //store as cookie
                cookies.set('jwt', res.data.token, { path: '/', maxAge: 2592000, secure: false});
                alert(cookies.get("jwt"))
                //redirect to home
                history.push('/home');
            }catch (err) {
                setLoading(null);
                alertify.alert('Error Occurred', err.response.data.message, function(){ 
                    alertify.error('Login Again!'); 
                });
            }
    }

    return (
        <>
        <Navbar />
        <div className="wrapper">
	           
               <div className="container_p">
               <h1 className="login-heading">Login</h1>
		
                <form className="form_p" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit" id="login-button">Login {loading}</button>
                    
                <br></br>
                <Link to='/signup'><div href="signup"  className="dont_have_an_account">Dont have an account?</div></Link>
                
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

export default LoginPage;
