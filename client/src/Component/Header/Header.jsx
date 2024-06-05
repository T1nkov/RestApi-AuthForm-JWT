import { useEffect, useState } from 'react';
import style from './header.module.css';
import Button from '@mui/material/Button';
import JsCookie from 'js-cookie'
import {useNavigate } from 'react-router-dom';

function Header() {
    const [token, setToken] = useState('')
    const novigation = useNavigate();

    function getToken() {
        const applicationToken = JsCookie.get('accessToken')
        setToken(applicationToken)
    }

    useEffect(() => {
        getToken()
    });

    function deleteToken() {
        JsCookie.remove('accessToken')
        setToken('')
        novigation('/');
    }

    return <>
        <div className={style.wrapper}>
            {token ?
                <Button onClick={deleteToken} className={style.btn}  variant="text">Log Out</Button>
                :
                <>
                    <Button className={style.btn}  variant="text">Sign In</Button>
                    <Button className={style.btn}  variant="text">Sign up</Button>
                </>
            }
        </div>
    </>
}
export default Header