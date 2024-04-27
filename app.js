import React from "react"
import ReactDOM from "react-dom/client"
import logo from './image/klipartz.com.png';

const JSXheading = <h1 id="attr">Namaste React using JSX </h1>



// React functional component (important)
const NavbarComponent = () => (
    <div className="navbar">
        <img className="logo" src={logo} alt="Logo"></img>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div >
)
// writing jS in JSX is so powerful like we can write HTML as well as JS in JSX

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e" alt="pizza"></img>
            <h3 style={{ marginBottom: "0px" }}>{props.Resname}</h3>
            <div className="res-menu">
                <h4>{props.cuisunie}</h4>
                <h4>25 Min</h4>
            </div>
            <span>300 for Two</span>
        </div>
    )
}

const CardContainer = () => (
    <div className="cardContainer">
        <RestaurantCard Resname="Pizza Hut" cuisunie="Italian,North-Indian,Semi-Asian" />
        <RestaurantCard Resname="BABU HUT" cuisunie="North-Indian,Semi-Asian" />
    </div>
)

const HomePage = () => (
    <div className="mainContainer">
        <div id="header">
            <NavbarComponent />
        </div>
        <div className="body">
            <h3>Search</h3>
            <CardContainer />
        </div>
        <div className="footer">

        </div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('kyabe'));
// root.render(heading);
// root.render(JSXheading);
root.render(<HomePage />)