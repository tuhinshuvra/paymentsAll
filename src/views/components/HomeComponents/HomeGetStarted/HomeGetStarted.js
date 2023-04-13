import React from 'react';
import { RxPerson } from 'react-icons/rx';
import { BsArrowRight, BsHeadset, BsArrowDown } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import './HomeGetStarted.css';

const HomeGetStarted = () => {
    return (

        <div className='getStartedBg py-5'>
            <div className='col-10 mx-auto'>

                <h1 className='securityRightTitle  text-center text-white my-3'>Get Started in Minutes</h1>

                <div className=' d-md-flex justify-content-around mt-5'>
                    <div className=' col-md-3'>
                        <div className="">
                            <div className=' text-center'>
                                <RxPerson className=' personIcon my-2'></RxPerson>
                            </div>
                            <div className="card-body d-flex text-white">
                                <div className=' text-center'>
                                    <h5 className="getStartedSubTitle">1. Create an account</h5>

                                    <p className="  mx-auto">Create your free account and folowthe onboarding stepss.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BsArrowRight className=' getStartedArrow fs-4 text-white d-none d-md-block '></BsArrowRight>

                    <div className='text-center  d-md-none'>
                        <BsArrowDown className='fs-4 text-white ' ></BsArrowDown>
                    </div>

                    <div className=' col-md-3 my-sm-0 my-3'>
                        <div className="">
                            <div className=' text-center'>
                                <BsHeadset className=' personIcon my-2 '></BsHeadset>
                            </div>
                            <div className="card-body d-flex text-white">
                                <div className=' text-center'>
                                    <h5 className="getStartedSubTitle">2. Verify your identity</h5>
                                    <p className="  mx-auto">Once you've onboarded,  upload your essential documents to verify your identity.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BsArrowRight className=' getStartedArrow fs-4 text-white d-none d-md-block '></BsArrowRight>

                    <div className='text-center  d-md-none'>
                        <BsArrowDown className='fs-4 text-white ' ></BsArrowDown>
                    </div>

                    <div className=' col-md-3'>
                        <div className="">
                            <div className=' text-center'>
                                <FcCheckmark className=' personIcon my-2'></FcCheckmark>
                            </div>
                            <div className="card-body d-flex text-white">
                                <div className=' text-center'>
                                    <h5 className="getStartedSubTitle">3. All set</h5>
                                    <p className="  mx-auto">Mobile banking, saving, and investing all are in one app.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default HomeGetStarted;