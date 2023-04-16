import React from 'react';
import OperationImage from '../../../../assets/paymentsAllOperation.jpg';
import { FaAnchor } from 'react-icons/fa';
import { BsFillHddStackFill, BsHandThumbsUpFill } from 'react-icons/bs';
import { GiConvergenceTarget } from 'react-icons/gi';

import './HomeOperationSection.css';

const HomeOperationSection = () => {
    return (
        <div className='opertionBg'>
            <div className='col-10 mx-auto'>
                <div className='row'>

                    {/* operation  image section */}
                    <div className=' col-lg-6 d-flex justify-content-center align-items-center animate_left'>
                        <img className='operionImage  d-none d-md-block' src={OperationImage} alt="" />
                    </div>

                    {/* operation text section */}
                    <div className='col-lg-6 animate_right'>
                        <h1 className='securityRightTitle mt-lg-0 mt-sm-4 mt-0 text-center text-md-start'>The Easiest Way to Operate and Use by You</h1>
                        <p className='securityRightSubTitle my-4 text-center text-md-start '>By using the cradit card, you can improve your financial life by building credit, earning rewards and saving money.</p>


                        {/* operation segments */}
                        <div className=' row text-center text-md-start'>
                            <div className=' col-md-6'>
                                <FaAnchor className='operationIcon'></FaAnchor>
                                <p className='fw-bold'>Transection</p>
                                <p className=' col-md-10'>This is the easiest way for money to transition from user to user, User to the bank, and bank to the user.</p>
                            </div>

                            <div className=' col-md-6'>
                                <BsFillHddStackFill className='operationIcon'></BsFillHddStackFill>
                                <p className='fw-bold'>Salary Payroll</p>
                                <p className=' col-md-10'>This system is a easiest payment system with many new features. Anyone can easily use this system.</p>
                            </div>

                            <div className=' col-md-6'>
                                <BsHandThumbsUpFill className='operationIcon'></BsHandThumbsUpFill>
                                <p className='fw-bold'>Solutions</p>
                                <p className=' col-md-10'>It provides solutions to problems like salary payments and travel cards. By using this app anyone can easily travel to any country.</p>
                            </div>

                            <div className=' col-md-6'>
                                <GiConvergenceTarget className='operationIcon'></GiConvergenceTarget>
                                <p className='fw-bold'>Summary</p>
                                <p className=' col-md-10'> Integrate your transactions in real time with our latest technology and system</p>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOperationSection;