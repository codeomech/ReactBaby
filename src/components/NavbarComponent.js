
import { useState } from 'react';
import logo from '../image/klipartz.com.png';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
    const [btnname, setbtnname] = useState('Login');

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"></img>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <a onClick={() => {
                btnname === 'Login' ? setbtnname('Logout') : setbtnname('Login');
            }}>{btnname}</a>
        </div >
    )
}

export default NavbarComponent;