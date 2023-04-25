import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import {
    MdInstallMobile, MdPermPhoneMsg, MdCreditCard, MdBolt, MdOutlineReceipt, MdAccountBalance,
    MdMobileFriendly, MdOutlineBookOnline, MdOutlineHowToVote, MdAssuredWorkload, MdWallet
} from 'react-icons/md';
import './HomeFeatureSection.css';

const HomeFeatureSection = () => {
    return (
        <div className='feature_bg text-center' id='featureSection'>
            <h2 className='featureHead animate_left'>All the Features to Support <br /> Your Payment Experience</h2>
            <p className='featureSubHead animate_right' > We bring together everything that you need to use <br /> for you to experiece of financial transaction</p>

            <div className='feature_items col-10 mx-auto animate_bottom'>


                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdInstallMobile className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Add Money</p>
                    <p className="title">Visa Card, Master Card, ATM Card, General Banking, Mobile Banking</p>
                </div>


                <div className='featureTopicsArea wrapper'  >

                    <div className=' me-5'><MdPermPhoneMsg className='featureIcon' /></div>
                    <p className='featureTopics'>Mobile Recharge</p>
                    <p className="title">Prepaid, postpaid Mobile Recharge</p>
                </div>

                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdCreditCard className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Travel Card</p>
                    <p className="title">International Travel Card for USD, Local travel card for BDT</p>
                </div>


                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdBolt className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Fuel Pay</p>
                    <p className="title">refuel payments and electric Vichel charging payments</p>
                </div>


                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdOutlineReceipt className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Bill Pay</p>
                    <p className="title">Utility bill, academic fees, insurance premium, doctors fees, diagnostic bill </p>
                </div>

                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdAccountBalance className='featureIcon' />
                    </div>
                    <p className='featureTopics'>General Banking</p>
                    <p className="title">Bank Transfer, mobile bank transfer, Credit Card bill</p>
                </div>

                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <GiReceiveMoney className='featureIcon' />
                    </div>
                    <p className='featureTopics'>E Loan</p>
                    <p className="title">20000TK instant loan without any document</p>
                </div>
                <div className='featureTopicsArea wrapper'>

                    <div className=' me-5'>
                        <MdMobileFriendly className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Mobile Banking</p>
                    <p className="title">Money transfer and cashout service, bill pay </p>
                </div>

                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdOutlineBookOnline className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Ticketing</p>
                    <p className="title">Bus, train, air ticketing service</p>
                </div>

                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdOutlineHowToVote className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Donation</p>
                    <p className="title"> Donate to Anjuman Mofidul Islam, Quantum Foundation, Red Cresent Society, or any other organization </p>
                </div>


                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdAssuredWorkload className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Govt Fees</p>
                    <p className="title">VAT,  TAX, AIT, DGDA, BSTI, CCIE, BLPA, or any other govt Fees can be paid</p>
                </div>

                <div className='featureTopicsArea wrapper'>
                    <div className=' me-5'>
                        <MdWallet className='featureIcon' />
                    </div>
                    <p className='featureTopics'>Salary Pay</p>
                    <p className="title">Employee's Salary can be paid</p>
                </div>
            </div>
        </div>
    );
};

export default HomeFeatureSection;