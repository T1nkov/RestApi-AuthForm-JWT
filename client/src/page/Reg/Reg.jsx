import Header from '../../Component/Header/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './reg.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Reg() {
    const [data, setData] = useState({});

    function getInp(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    async function authUser() {
        const response = await axios.post('http://localhost:3001/user',data);
        console.log(response.data);
    }
    return <>
        <Header />
        <div className={style.wrapper}>
            <h1>Welcome, let's create an account</h1>
            <p>Create an account to keep track of your customers, and contributors.
                Once your account has been created then don’t forget to verify your
                account through mail.</p>

            <div className={style.name_surname}>
                <TextField onChange={getInp} name = 'name' className={style.name} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField onChange={getInp} name = 'surname' className={style.surname} id="outlined-basic" label="Your surname" variant="outlined" />
            </div>
            <>
                <TextField onChange={getInp} name='email' className={style.email_pwd} id="outlined-basic" label="Your emali" variant="outlined" />
            </>
            <>
                <TextField onChange={getInp} name='password' className={style.email_pwd} id="outlined-basic" label="Your password & Must be at least 8 characters." variant="outlined" />
            </>
            <div className={style.button}>
                <Button onClick = {authUser} variant="contained">Continue</Button>
            </div>
            <div className={style.link}>
                <p>Already registered?
                    <Link to={'/'}> Sign In</Link>
                </p>
            </div>
        </div >
    </>
}
export default Reg;