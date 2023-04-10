import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import './HomeSecuritySection.css';

const HomeSecuritySection = () => {
    return (
        <div className=''>
            <div className='col-10 mx-auto'>
                <div className=' row'>
                    <div className='col-6'>
                        <div className=' d-flex'>
                            <img src="" alt="" />
                            <BsEmojiSmile className='security_icon'></BsEmojiSmile>
                            <div>
                                <h5 className=' '>Face Scan Security</h5>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, fugit!   </p>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <h2>Right Section</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSecuritySection;