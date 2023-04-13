import React from 'react';
import { BsEmojiSmile, BsFingerprint } from 'react-icons/bs';
import { TbHandFinger } from 'react-icons/tb';
import { AiOutlineRight } from 'react-icons/ai';
import SecurityOne from '../../../../assets/security/security_1.jpg'
import SecurityTwo from '../../../../assets/security/security_2.jpg'
import { Link } from 'react-router-dom';
import './HomeSecuritySection.css';

const HomeSecuritySection = () => {
    return (
        <div className='securityBg'>
            <div className='col-10 mx-auto py-lg-5'>
                <div className=' row'>

                    {/* secutiry types section */}
                    <div className='col-lg-6 mt-5'>
                        <div className=' d-flex  align-items-center'>
                            <BsEmojiSmile className='security_icon'></BsEmojiSmile>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Face Scan Security</p>
                                <p className='secutirySubTitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, fugit elit. Blanditiis, fugit</p>
                            </div>
                        </div>

                        <div className=' d-flex  align-items-center'>
                            <BsFingerprint className='security_icon'></BsFingerprint>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Finger Scan Security</p>
                                <p className='secutirySubTitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, fugit elit. Blanditiis, fugit</p>
                            </div>
                        </div>
                        <div className=' d-flex  align-items-center'>
                            <TbHandFinger className='security_icon'></TbHandFinger>
                            <div className=' my-auto ms-4'>
                                <p className='secutiryTitle'>Tap Balance Transfer</p>
                                <p className='secutirySubTitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, fugit elit. Blanditiis, fugit</p>
                            </div>
                        </div>

                    </div>
                    {/* secutiry handle money and get started section */}
                    <div className='col-lg-6 my-lg-5 my-md-5 my-3 d-flex justify-content-center align-items-center  text-md-start  text-center'>
                        <h1 className='securityRightTitle'>We Will Handle the Money With Safety and Security</h1>
                        {/* <p className='securityRightSubTitle my-lg-5 my-3'>By using the cradit card, you can improve your financial life by building credit, earning rewards and saving money.</p>
                        <Link className=' payments_btn'>Get Started Now</Link> */}
                    </div>


                    {/* smart control section */}
                    <div className='col-lg-6 my-lg-5 d-flex justify-content-center align-items-center text-md-start  text-center'>
                        <h1 className='securityRightTitle'>Smartly Control Your Invoices and Payments</h1>
                        {/* <p className='securityRightSubTitle my-lg-5 my-3'>By using the cradit card, you can improve your financial life by building credit, earning rewards and saving money.</p>
                        <Link className='payments_outLine_btn'>Learn More<AiOutlineRight /></Link> */}
                    </div>

                    {/* smart control image section */}
                    <div className='col-lg-6 mt-5 d-md-flex justify-content-center align-items-center text-center'>
                        <img className='securityTwo rounded-4' src={SecurityTwo} alt="" />
                        <img className='securityOne rounded-4 ms-md-2 mt-md-0 mt-2' src={SecurityOne} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSecuritySection;