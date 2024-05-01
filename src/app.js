import React from "react"
import ReactDOM from "react-dom/client"
import NavbarComponent from "./components/NavbarComponent";
import CardContainer from "./components/CardContainer";



const HomePage = () => {
    return (
        < div className="mainContainer" >
            <div id="header">
                <NavbarComponent />
            </div>
            <div className="body">
                <CardContainer />
            </div>
            <div className="footer">

            </div>
        </div >
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />)


