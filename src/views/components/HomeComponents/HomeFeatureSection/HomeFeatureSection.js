import React, { useState } from 'react';
import FeatureTopics from './FeatureSingleTopics/FeatureSingleTopics';
import { GiReceiveMoney } from 'react-icons/gi';
import {
    MdInstallMobile, MdPermPhoneMsg, MdCreditCard, MdBolt, MdOutlineReceipt, MdAccountBalance,
    MdMobileFriendly, MdOutlineBookOnline, MdOutlineHowToVote, MdAssuredWorkload, MdWallet
} from 'react-icons/md';
import './HomeFeatureSection.css';

const HomeFeatureSection = () => {
    const [sendMoney, setSendMoney] = useState(false);
    const [mbRecharge, setMbRecharge] = useState(false);


    const toggleIsSendMoney = () => {
        setSendMoney(current => !current);
    };

    const toggleIsMbRecharge = () => {
        setMbRecharge(current => !current);
    };

    function on() {
        document.getElementById("overlay").style.display = "block";
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
    }

    return (
        <div className='feature_bg text-center' id='featureSection'>
            <h2 className='featureHead animate_left'>All the Features to Support <br /> Your Payment Experience</h2>
            <p className='featureSubHead animate_right' > We bring together everything that you need to use <br /> for you to experiece of financial transaction</p>

            <div className='feature_items col-10 mx-auto animate_bottom'>




                {/* <div className="wrapper">
                    <div className="bg-image">
                        <p className="title">Title Data Show</p>
                    </div>
                </div> */}




                <div onMouseDown={toggleIsSendMoney} className='featureTopicsArea wrapper'>
                    <MdInstallMobile className='featureIcon' />
                    <p className='featureTopics'>Add Money</p>
                    <p className="title">Add Money Data Show</p>
                </div>


                <div onClick={toggleIsMbRecharge} className='featureTopicsArea '  >
                    <MdPermPhoneMsg className='featureIcon' />
                    <p className='featureTopics'>Mobile Recharge</p>
                    {mbRecharge &&
                        <div className=' dataList'>
                            <p>Mobile Recharge</p>
                            <p>Another action</p>
                            <p>Something else here</p>
                        </div>
                    }


                </div>

                <div className='featureTopicsArea'>
                    <MdCreditCard className='featureIcon' />
                    <p className='featureTopics'>Travel Card</p>
                </div>


                <div className='featureTopicsArea'>
                    <MdBolt className='featureIcon' />
                    <p className='featureTopics'>Fuel Pay</p>
                </div>


                <div className='featureTopicsArea'>
                    <MdOutlineReceipt className='featureIcon' />
                    <p className='featureTopics'>Bill Pay</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdAccountBalance className='featureIcon' />
                    <p className='featureTopics'>General Transfer</p>
                </div>

                <div className='featureTopicsArea'>
                    <GiReceiveMoney className='featureIcon' />
                    <p className='featureTopics'>E Loan</p>
                </div>
                <div className='featureTopicsArea'>
                    <MdMobileFriendly className='featureIcon' />
                    <p className='featureTopics'>Mobile Banking</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdOutlineBookOnline className='featureIcon' />
                    <p className='featureTopics'>Ticketing</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdOutlineHowToVote className='featureIcon' />
                    <p className='featureTopics'>Donation</p>
                </div>


                <div className='featureTopicsArea'>
                    <MdAssuredWorkload className='featureIcon' />
                    <p className='featureTopics'>Govt Fees</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdWallet className='featureIcon' />
                    <p className='featureTopics'>Salary Pay</p>
                </div>
            </div>
        </div>
    );
};

export default HomeFeatureSection;