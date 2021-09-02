import React from 'react'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Navbar from './../NavbarComponents/Navbar';
import Spin from './Loading';

import './settings.css'
import api from './../../Util/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKey, faSignInAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

let cookies = new Cookies();
const General = ({ user }) => {
    const [saving, setSaving] = useState(null);
    const [savingPic, setSavingPic] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = {
            name: e.target.fullName.value,
            job: e.target.job.value,
            niche: e.target.niche.value,
            description: e.target.description.value
        }
        try {
            setSaving(<Spin />)
            await api.patch('user/update', res, { withCredentials: true });
            setSaving(null);
        } catch (err) {
            setSaving(null);
            alert(err);
        }
    }
    const handleSubmitPic = async (e) => {
        e.preventDefault();
            const resPic = {
                dp: e.target.dp.value,
                cover: e.target.cover.value
        }
            try {
                setSavingPic(<Spin />)
                await api.patch('user/update', resPic, { withCredentials: true });
                setSavingPic(null);
            } catch (err) {
                setSavingPic(null);
                alert(err);
            }
        }
        return (<>
            <h1>General Settings</h1>
            <form className='gs-form' onSubmit={handleSubmit}>
                <input type="text" name="fullName" defaultValue={user.name} placeholder='Name' />
                <input type="text" name="job" defaultValue={user.job} placeholder='Profession' />
                <input type="text" name="niche" defaultValue={user.niche} placeholder='Your Niche eg. Travel Blogger' />
                <textarea name="description" cols="15" rows="6" defaultValue={user.description} placeholder='About You' />
                <button type='submit'>Update{saving}</button>
            </form>
            <h1 className='gap-settings'>Profile And Cover</h1>
            <form className='gs-form' onSubmit={handleSubmitPic}>
                <input type="text" name="dp" defaultValue={user.dp} placeholder='Profile Pic URL' />
                <input type="text" name="cover" defaultValue={user.cover} placeholder='Cover Pic URL' />
                <button type='submit'>Update{savingPic}</button>
            </form>
        </>);
}
const Password = () => {
    const history = useHistory();
    const [saving, setSaving] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = {
                currentPassword: e.target.password.value,
                password: e.target.newPassword.value,
                confirmPassword: e.target.newPasswordConfirm.value
        }
        try {
            setSaving(<Spin />);
            /* const status =  */await api.patch('user/updatePassword', res, { withCredentials: true });
            setSaving(null);
            cookies.set('jwt', 'abcd', { path: '/', maxAge: 2592000, secure: false });
            alert('password changed successfully'+cookies.get("jwt"));
            window.location.reload();
            history.push('/login');
        } catch (err) {
            setSaving(null);
            alert(err.response.data.message);
        }
    }
    return (<>
        <h1>Change Your Password</h1>
        <form autocomplete="off" onSubmit={handleSubmit} className='gs-form'>
            <input type="password" name="password" placeholder="Current Password"/>
            <input type="password" name="newPassword"  placeholder="New Password" />
            <input type="password" name="newPasswordConfirm"  placeholder="Confirm New Password" />
            <button>Update{saving}</button>
        </form>
    </>);
}
const Notification = () => {
    return (<>
        <h1>Manage Notification</h1>5
        <div className='notification-stng'>
            <label for="notification">When can we email you?</label>
            <select id="notification" name="notification">
                <option value="australia">Always</option>
                <option value="canada">Sometime</option>
                <option value="usa">Never</option>
            </select>
            <button className='logout-btn-st '>Update</button>
        </div>
    </>);
}
const Logout = () => {
    return (<>
        <h1>If you are unable to logout, please clear the cookies manually.</h1>
    </>);
}
const Loading = () => {
    return (<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>);
}


 let lastFocus = '.g_st';
const SettingsPage = () => {
    const history = useHistory();
    const [render, setRender] = useState('general');
    const [user, setUser] = useState({});
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let prevState = render;
                setRender('loading');
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                setUser(res.data.user);
                setRender(prevState);
            } catch (err) {
                history.push('/login');
            }
        }
        fetchMyAPI();
    }, []);

    const handleGeneral = (e) => {
        document.querySelector(lastFocus).classList.remove('to-green');
        document.querySelector('.g_st').classList.add('to-green');
        setRender('general');
        lastFocus = '.g_st';
    }
    const handlePassword = (e) => {
        document.querySelector(lastFocus).classList.remove('to-green');
        document.querySelector('.p_st').classList.add('to-green');
        setRender('password');
        lastFocus = '.p_st';
    }
    const handleNotification = (e) => {
        document.querySelector(lastFocus).classList.remove('to-green');
        document.querySelector('.n_st').classList.add('to-green');
        setRender('notification');
        lastFocus = '.n_st';
    }
    const handleLogout = (e) => {
        document.querySelector(lastFocus).classList.remove('to-green');
        document.querySelector('.l_st').classList.add('to-green');
            setRender('logout');
            cookies.set('jwt', 'NA', { path: '/', maxAge: 2000, secure: false });
            window.location.reload();
            history.push('/');
        lastFocus = '.l_st';
    }
    return (
        <>
        <Navbar/>
        <div className='container-settings'>
            <div className='side-menu-settings'>
                <div className='dp-name-settings'>
                        <img src={user.dp} alt="DP" height='100px' width="100px"/>
                        <p>{user.name}</p>
                </div>
                <div className='options-settings'>
                    <div onClick={handleGeneral} className='op-setting g_st to-green'><p><FontAwesomeIcon icon={faHome} size="sm"/> General</p></div>
                    <div onClick={handlePassword} className='op-setting p_st'><p><FontAwesomeIcon icon={faKey} size="sm"/> Password</p></div>
                    <div onClick={handleNotification} className='op-setting n_st'><p><FontAwesomeIcon icon={faBell} size="sm" /> Notification</p></div>
                    <div onClick={handleLogout} className='op-setting l_st'><p><FontAwesomeIcon icon={faSignInAlt} size="sm"/> Logout</p></div>
                </div>
            </div>  
                <div className='render-settings'>
                    {render === 'general' && <General user={user}/>}
                    {render === 'password' && <Password />}
                    {render === 'notification' && <Notification />}
                    {render==='loading' && <Logout/>}
            </div>
            </div>
        </>
    )
}

export default SettingsPage
