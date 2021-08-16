import './LoginPage.css'
import { React,useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from './../../Util/api';
import Loading from '../Extras/Loading';

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
                //redirect to home
                history.push('/home');
            }catch (err) {
                setLoading(null);
                //Error message to popup on screen!
                if (err.response.hasOwnProperty('data')) {
                    alert(err.response.data.message);
                }
                else {
                    alert(err);
                }
            }
    }

    return (
        <div className="wrapper">
	           
               <div className="container_p">
               <h1 className="login-heading">Login</h1>
		
                <form className="form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                    <button type="submit" id="login-button">Login {loading}</button>
                    
                <br></br>
                <a href="signup"  className="dont_have_an_account">Dont have an account?</a>
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
