import React from 'react';
import './FeatureSingleTopics.css';

const FeatureTopics = ({ Icon, Topics }) => {
    return (
        <div className='featureTopicsArea'>
            <img className='featureIcon' src={Icon} alt="" />
            <p className='featureTopics'>{Topics}</p>
        </div>
    );
};

export default FeatureTopics;