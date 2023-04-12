import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree }) => {
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col">
                    <div className="carsosolItemArea shadow">
                        <ImQuotesLeft className=' feedbackQuote'></ImQuotesLeft>
                        <p className='feebdackText col-11 my-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio repudiandae voluptatum Distinctio </p>
                        <div className=" d-flex">
                            <img className="feedbackUser" src={imgOne} alt="Card_image_cap" />
                            <div className='ms-2 feedbackUserName'>
                                <p className='feedbackUserName'>Harun Shake</p>
                                <p className='feedbackUserDesig'>CEO, Global Group</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col d-none d-md-block">
                    <div className="carsosolItemArea shadow">
                        <ImQuotesLeft className=' feedbackQuote'></ImQuotesLeft>
                        <p className='feebdackText col-11 my-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio repudiandae voluptatum Distinctio </p>
                        <div className=" d-flex">
                            <img className="feedbackUser" src={imgTwo} alt="Card_image_cap" />
                            <div className='ms-2 feedbackUserName'>
                                <p className='feedbackUserName'>Harun Shake</p>
                                <p className='feedbackUserDesig'>CEO, Global Group</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col d-none d-xl-block">
                    <div className="carsosolItemArea shadow">
                        <ImQuotesLeft className=' feedbackQuote'></ImQuotesLeft>
                        <p className='feebdackText col-11 my-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio repudiandae voluptatum Distinctio </p>
                        <div className=" d-flex">
                            <img className="feedbackUser" src={imgThree} alt="Card_image_cap" />
                            <div className='ms-2 feedbackUserName'>
                                <p className='feedbackUserName'>Harun Shake</p>
                                <p className='feedbackUserDesig'>CEO, Global Group</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridCarousolItem;