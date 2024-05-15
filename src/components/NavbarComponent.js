
import { useState } from 'react';
import logo from '../image/klipartz.com.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../constants/useOnlineStatus';


const NavbarComponent = () => {
    const [btnname, setbtnname] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo"></img>
            <span>{onlineStatus ? "🟢" : "🔴"}</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/grocery">Grocery</Link>
            <Link to="/contact">Contact</Link>
            <a onClick={() => {
                btnname === 'Login' ? setbtnname('Logout') : setbtnname('Login');
            }}>{btnname}</a>
        </div >
    )
}

export default NavbarComponent;