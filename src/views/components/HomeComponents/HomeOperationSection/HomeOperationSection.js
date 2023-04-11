import React from 'react';
import ImageOne from '../../../../assets/payments_all_app.png';
import { FaAnchor } from 'react-icons/fa';
import { BsFillHddStackFill, BsHandThumbsUpFill } from 'react-icons/bs';
import { GiConvergenceTarget } from 'react-icons/gi';

import './HomeOperationSection.css';

const HomeOperationSection = () => {
    return (
        <div className='operionBg py-5'>
            <div className='col-md-10 mx-auto'>
                <div className='row'>

                    {/* operation  image section */}
                    <div className=' col-md-6'>
                        <img className='operionImage' src={ImageOne} alt="" />
                    </div>

                    {/* operation text section */}
                    <div className='col-6 mt-5'>
                        <h1 className='securityRightTitle'>Most Easiest way to Operate and Use by You</h1>
                        <p className='securityRightSubTitle my-4'>By using the cradit card, you can improve your financial life by building credit, earning rewards and saving money.</p>


                        {/* operation segments */}
                        <div className=' row'>
                            <div className=' col-md-6'>
                                <FaAnchor className='operationIcon'></FaAnchor>
                                <p className='fw-bold'>Integrate</p>
                                <p className=' col-md-10'> Integrate your transactions in real time with our latest technology and system</p>
                            </div>

                            <div className=' col-md-6'>
                                <BsFillHddStackFill className='operationIcon'></BsFillHddStackFill>
                                <p className='fw-bold'>Analyze</p>
                                <p className=' col-md-10'> Integrate your transactions in real time with our latest technology and system</p>
                            </div>

                            <div className=' col-md-6'>
                                <GiConvergenceTarget className='operationIcon'></GiConvergenceTarget>
                                <p className='fw-bold'>Summary</p>
                                <p className=' col-md-10'> Integrate your transactions in real time with our latest technology and system</p>
                            </div>

                            <div className=' col-md-6'>
                                <BsHandThumbsUpFill className='operationIcon'></BsHandThumbsUpFill>
                                <p className='fw-bold'>Solutions</p>
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