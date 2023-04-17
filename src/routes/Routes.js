import MainLayout from "../layout/MainLayout";
import HomeFeatureSection from "../views/components/HomeComponents/HomeFeatureSection/HomeFeatureSection";
import HomeGetStarted from "../views/components/HomeComponents/HomeGetStarted/HomeGetStarted";
import HomeOfferSection from "../views/components/HomeComponents/HomeOfferSection/HomeOfferSection";
import HomeSecuritySection from "../views/components/HomeComponents/HomeSecuritySection/HomeSecuritySection";
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
                path: "/features",
                element: <HomeFeatureSection></HomeFeatureSection>
            },
            {
                path: "/offers",
                element: <HomeOfferSection></HomeOfferSection>
            },

            {
                path: "/safty",
                element: <HomeSecuritySection></HomeSecuritySection>
            },

            {
                path: "/getStarted",
                element: <HomeGetStarted></HomeGetStarted>
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

