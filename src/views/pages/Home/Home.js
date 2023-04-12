import React from 'react';
import Feature from '../../components/HomeComponents/HomeFeatureSection/Feature';
import AboutUs from '../../components/HomeComponents/HomeAboutUs/AboutUs';
import HomeSecuritySection from '../../components/HomeComponents/HomeSecuritySection/HomeSecuritySection';
import HomeOperationSection from '../../components/HomeComponents/HomeOperationSection/HomeOperationSection';
import HomeUserFeedback from '../../components/HomeComponents/HomeUserFeedback/HomeUserFeedback';
import HomeGetStarted from '../../components/HomeComponents/HomeGetStarted/HomeGetStarted';

const Home = () => {
    return (
        <div>
            <Feature></Feature>
            <HomeSecuritySection></HomeSecuritySection>
            <HomeOperationSection></HomeOperationSection>
            <HomeUserFeedback></HomeUserFeedback>
            <HomeGetStarted></HomeGetStarted>
            {/* <AboutUs></AboutUs> */}
        </div>
    );
};

export default Home;