import React from 'react';
import { BsEmojiSmile, BsFingerprint } from 'react-icons/bs';
import { TbHandFinger } from 'react-icons/tb';
import { AiOutlineRight } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import SecurityOne from '../../../../assets/security/security_1.jpg'
import SecurityTwo from '../../../../assets/security/security_2.jpg'
import { Link } from 'react-router-dom';
import './HomeSecuritySection.css';

const HomeSecuritySection = () => {
    return (
        <div className='securityBg'>
            <div className='col-10 mx-auto py-lg-5'>
                <div className=' row'>


                    {/* secutiry handle money and get started section */}
                    {/* <div className='col-lg-6  d-flex justify-content-center align-items-center  text-md-start  text-center animate_left'> */}
                    <div className='col-lg-6 my-auto text-md-start  text-center animate_left'>
                        <h1 className='paymentsAllTitle my-4 text-center text-lg-start'>We Will Handle the Money With Safety and Security</h1>
                        <p className='securitySubTitle'>PaymentsAll prioritizes the safety and security of its users financial information. The app employs advanced encryption technologies, multi factor authentication, and regular security audits to ensure that users can trust it with their sensitive data. PaymentsAll also has a dedicated team of security experts to quickly respond to any potential threats or breaches.</p>
                    </div>


                    {/* secutiry types section */}
                    <div className='col-lg-6 mt-5 animate_right'>
                        <div className=' d-flex  align-items-center'>
                            <BsEmojiSmile className='security_icon'></BsEmojiSmile>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Face Scan Security</p>
                                <p className='securitySubTitle'>We provide face scan security with the latest password secure technology in our system</p>
                            </div>
                        </div>

                        <div className=' d-flex  align-items-center'>
                            <BsFingerprint className='security_icon'></BsFingerprint>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Finger Scan Security</p>
                                <p className='securitySubTitle'>We provide finger scan security with the latest password secured technology in our system</p>
                            </div>
                        </div>

                        <div className=' d-flex  align-items-center'>
                            <RiLockPasswordFill className='security_icon'></RiLockPasswordFill>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Password Security</p>
                                <p className='securitySubTitle'>Here your password will be provided with the latest password-secured technology in our system</p>
                            </div>
                        </div>

                        <div className=' d-flex  align-items-center'>
                            <TbHandFinger className='security_icon'></TbHandFinger>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Tap Balance Transfer</p>
                                <p className='securitySubTitle'>We will provide secured tab balance transfer security with the latest technology in our system</p>
                            </div>
                        </div>
                    </div>

                    {/* smart control section for mobile screen show */}
                    <div className='col-lg-6 mt-sm-5 mt-lg-0 mt-4 text-md-start  mb-5 text-cente d-block d-lg-none animate_right'>
                        <h1 className='paymentsAllTitle text-center text-lg-start '>Smartly Control Your Invoices and Payments</h1>
                        <p className='securitySubTitle'>Users of PaymentsAll can easily create and send invoices, track payment status, and manage their cash flow in real time. The app also supports a range of payment options, including credit cards, debit cards, and bank transfers, making it simple and convenient for users to get paid. PaymentsAlls robust payment control features ensure that users have full visibility and control over their finances.</p>
                    </div>



                    {/* smart control image section */}

                    <div className='col-lg-6 text-center flex-md-row-reverse mb-5 mb-lg-0 animate_left'>
                        <img className='securityTwo rounded-4' src={SecurityTwo} alt="" />
                        <img className='securityOne rounded-4' src={SecurityOne} alt="" />
                    </div>

                    {/* smart control section fon large screen show */}
                    <div className=' col-lg-6  d-flex justify-content-center  align-items-center animate_right'>
                        <div className='text-md-start mt-5  text-cente d-none d-lg-block '>
                            <h1 className='paymentsAllTitle text-center text-md-start '>Smartly Control Your Invoices and Payments</h1>
                            <p className='securitySubTitle'>Users of PaymentsAll can easily create and send invoices, track payment status, and manage their cash flow in real time. The app also supports a range of payment options, including credit cards, debit cards, and bank transfers, making it simple and convenient for users to get paid. PaymentsAlls robust payment control features ensure that users have full visibility and control over their finances.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomeSecuritySection;