
import logo from '../image/klipartz.com.png';

const NavbarComponent = () => (
    <div className="navbar">
        <img className="logo" src={logo} alt="Logo"></img>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div >
)

export const varex = 5;
export default NavbarComponent;