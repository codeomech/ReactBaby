import React from "react"
import ReactDOM from "react-dom/client"
import NavbarComponent from "./components/NavbarComponent";
import CardContainer from "./components/CardContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const HomePage = () => {
    return (
        < div className="mainContainer" >
            <div id="header">
                <NavbarComponent />
            </div>
            <div className="body">
                <Outlet />
            </div>
            <div className="footer">

            </div>
        </div >
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <CardContainer />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/restaurants/:resid',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error ></Error>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)


