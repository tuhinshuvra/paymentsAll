import React from 'react';
import HomeUserFeedbackCarousol from './HomeUserFeedbackCarousol/HomeUserFeedbackCarousol';
import './HomeUserFeedback.css';

const HomeUserFeedback = () => {
    return (
        <div className='userFeedbackBg py-5  '>
            <h2 className='paymentsAllTitle text-center pt-3 pb-5 px-2 animate_bottom'>Whats Our User are Saying</h2>
            <HomeUserFeedbackCarousol className=""></HomeUserFeedbackCarousol>
        </div>
    );
};

export default HomeUserFeedback;