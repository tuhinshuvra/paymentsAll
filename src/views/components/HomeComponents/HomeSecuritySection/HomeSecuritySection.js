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
                    <div className='col-lg-6  d-flex justify-content-center align-items-center  text-md-start  text-center'>
                        <h1 className='securityRightTitle my-4'>We Will Handle the Money With Safety and Security</h1>
                    </div>


                    {/* secutiry types section */}
                    <div className='col-lg-6 mt-5'>
                        <div className=' d-flex  align-items-center'>
                            <BsEmojiSmile className='security_icon'></BsEmojiSmile>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Face Scan Security</p>
                                <p className='secutirySubTitle'>We will provide face scan security with the latest password-secured technology in our system</p>
                            </div>
                        </div>


                        <div className=' d-flex  align-items-center'>
                            <BsFingerprint className='security_icon'></BsFingerprint>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Finger Scan Security</p>
                                <p className='secutirySubTitle'>We will provide finger scan security with the latest password-secured technology in our system</p>
                            </div>
                        </div>
                        <div className=' d-flex  align-items-center'>
                            <RiLockPasswordFill className='security_icon'></RiLockPasswordFill>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Password Security</p>
                                <p className='secutirySubTitle'>Here your password will be provided with the latest password-secured technology in our system</p>
                            </div>
                        </div>

                        <div className=' d-flex  align-items-center'>
                            <TbHandFinger className='security_icon'></TbHandFinger>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Tap Balance Transfer</p>
                                <p className='secutirySubTitle'>We will provide secured tab balance transfer security with the latest technology in our system</p>
                            </div>
                        </div>
                    </div>

                    {/* smart control section for mobile screen show */}
                    <div className='col-lg-6 mt-sm-5 mt-lg-0  text-md-start  text-cente d-block d-lg-none'>
                        <h1 className='securityRightTitle text-center text-md-start '>Smartly Control Your Invoices and Payments</h1>
                    </div>



                    {/* smart control image section */}

                    <div className='col-lg-6 text-center flex-md-row-reverse mb-5 mb-lg-0'>
                        <img className='securityTwo rounded-4' src={SecurityTwo} alt="" />
                        <img className='securityOne rounded-4' src={SecurityOne} alt="" />
                    </div>

                    {/* smart control section fon large screen show */}
                    <div className=' col-lg-6  d-flex justify-content-center  align-items-center'>
                        <div className='text-md-start  text-cente d-none d-lg-block '>
                            <h1 className='securityRightTitle text-center text-md-start '>Smartly Control Your Invoices and Payments</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomeSecuritySection;