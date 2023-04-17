import React from 'react';
import HomeFeatureSection from '../../components/HomeComponents/HomeFeatureSection/HomeFeatureSection';
import HomeSecuritySection from '../../components/HomeComponents/HomeSecuritySection/HomeSecuritySection';
import HomeOperationSection from '../../components/HomeComponents/HomeOperationSection/HomeOperationSection';
import HomeUserFeedback from '../../components/HomeComponents/HomeUserFeedback/HomeUserFeedback';
import HomeGetStarted from '../../components/HomeComponents/HomeGetStarted/HomeGetStarted';
import HomeOfferSection from '../../components/HomeComponents/HomeOfferSection/HomeOfferSection';

const Home = () => {
    return (
        <div>
            <HomeFeatureSection></HomeFeatureSection>
            <HomeOfferSection></HomeOfferSection>
            <HomeSecuritySection></HomeSecuritySection>
            <HomeOperationSection></HomeOperationSection>
            <HomeUserFeedback></HomeUserFeedback>
            <HomeGetStarted></HomeGetStarted>
        </div>
    );
};

export default Home;