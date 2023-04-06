import MainLayout from "../layout/MainLayout";
import AboutUs from "../views/components/HomeComponents/HomeAboutUs/AboutUs";
import Feature from "../views/components/HomeComponents/HomeFeatureSection/Feature";
import Solution from "../views/components/HomeComponents/HomeSolutionSection/Solution";
import Login from "../views/pages/Authentication/Login/Login";
import Signup from "../views/pages/Authentication/Signup/Signup";
import Home from "../views/pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/features",
                element: <Feature></Feature>
            },
            {
                path: "/solution",
                element: <Solution></Solution>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
        ]
    }

]);

export default router;

