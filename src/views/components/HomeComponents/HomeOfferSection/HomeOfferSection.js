import React from 'react';
import HomeOfferCarousol from './HomeOfferCarousol/HomeOfferCarousol';
import './HomeOfferSection.css';

const HomeOfferSection = () => {
    return (
        <div className='offerBg py-5'>
            <h2 className='securityRightTitle text-center py-5'>Our Recent Offers for you</h2>
            <HomeOfferCarousol></HomeOfferCarousol>
        </div>
    );
};

export default HomeOfferSection;