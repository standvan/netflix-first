import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
const HeaderLogin = (props) => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <img src={Logo} alt="" />
            <button onClick={() => {navigate(props.login? '/signup': '/login')}}>
                {props.login ? 'Sign Up': 'Log In'}
            </button>
        </div>
    )
}

export default HeaderLogin