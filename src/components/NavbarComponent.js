
import { useState } from 'react';
import logo from '../image/klipartz.com.png';


const NavbarComponent = () => {
    const [btnname, setbtnname] = useState('Login');

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"></img>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a onClick={() => {
                btnname === 'Login' ? setbtnname('Logout') : setbtnname('Login');
            }}>{btnname}</a>
        </div >
    )
}

export const varex = 5;
export default NavbarComponent;