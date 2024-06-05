import Header from '../../Component/Header/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './auth.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Auth() {
    const [data, setData] = useState({});
    const novigation = useNavigate();
    
    function getInp(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    async function authUser() {
        const response = await axios.post('http://localhost:3001/user/auth', data, { withCredentials: true });
        console.log(response.data);
        novigation('/home')
    }
    return <>
        <Header />
        <div className={style.wrapper}>
            <h1>Sign In</h1>
            <p>Log in to access your account or create one. Verify your email for seamless access.</p>

            <div>
                <TextField onChange={getInp} name='email' className={style.email_pwd} id="outlined-basic" label="Your emali" variant="outlined" />
            </div>
            <div>
                <TextField onChange={getInp} name='password' className={style.email_pwd} id="outlined-basic" label="password & Must be at least 8 characters." variant="outlined" />
            </div>
            <div className={style.button}>
                <Button onClick={authUser} variant="contained">Continue</Button>
            </div>
            <div className={style.link}>
                <p>Not registered yet?
                    <Link to={'/reg'}>Sign Up</Link></p>
            </div>
        </div>
    </>
}
export default Auth;