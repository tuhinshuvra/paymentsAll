import MainLayout from "../layout/MainLayout";
import AboutUs from "../views/components/HomeComponents/HomeAboutUs/AboutUs";
import HomeFeatureSection from "../views/components/HomeComponents/HomeFeatureSection/HomeFeatureSection";
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
                element: <HomeFeatureSection></HomeFeatureSection>
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

