import React from 'react';
import Navbar from '../../components/CommonLayout/Header/Navbar';
import Hero from '../../components/HomeComponents/HomeHeroSection/Hero';
import Footer from '../../components/CommonLayout/Footer/Footer';
import Feature from '../../components/HomeComponents/HomeFeatureSection/Feature';
import Solution from '../../components/HomeComponents/HomeSolutionSection/Solution';
import AboutUs from '../../components/HomeComponents/HomeAboutUs/AboutUs';
import HomeSecuritySection from '../../components/HomeComponents/HomeSecuritySection/HomeSecuritySection';

const Home = () => {
    return (
        <div className=''>
            {/* <Navbar></Navbar> */}
            {/* <Hero></Hero> */}
            <Feature></Feature>

            <HomeSecuritySection></HomeSecuritySection>
            <Solution></Solution>
            <AboutUs></AboutUs>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;