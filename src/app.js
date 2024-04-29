import React from "react"
import ReactDOM from "react-dom/client"
import NavbarComponent from "./components/NavbarComponent";
import CardContainer from "./components/CardContainer";

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />)


