import React from 'react';
import HomeUserFeedbackCarousol from './HomeUserFeedbackCarousol/HomeUserFeedbackCarousol';
import './HomeUserFeedback.css';

const HomeUserFeedback = () => {
    return (
        <div className='userFeedbackBg py-5'>
            <h2 className='securityRightTitle text-center py-4'>Whats Our User are Saying</h2>
            <HomeUserFeedbackCarousol></HomeUserFeedbackCarousol>
        </div>
    );
};

export default HomeUserFeedback;