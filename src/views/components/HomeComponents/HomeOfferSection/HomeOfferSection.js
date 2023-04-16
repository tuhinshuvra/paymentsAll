import React from 'react';
import HomeOfferCarousol from './HomeOfferCarousol/HomeOfferCarousol';
import './HomeOfferSection.css';

const HomeOfferSection = () => {
    return (
        <div className='offerBg' id='offerSection'>
            <h2 className='securityRightTitle text-center py-5 animate_left'>Our Recent Offers for you</h2>
            <HomeOfferCarousol className=""></HomeOfferCarousol>
        </div>
    );
};

export default HomeOfferSection;