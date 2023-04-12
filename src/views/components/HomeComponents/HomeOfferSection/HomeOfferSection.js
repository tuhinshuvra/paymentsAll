import React from 'react';
import './HomeOfferSection.css';
import HomeOfferCarousol from './HomeOfferCarousol/HomeOfferCarousol';

const HomeOfferSection = () => {
    return (
        <div className='userFeedbackBg py-5'>
            <h2 className='securityRightTitle text-center py-5'>Our Recent Offers for you</h2>
            <HomeOfferCarousol></HomeOfferCarousol>
        </div>
    );
};

export default HomeOfferSection;