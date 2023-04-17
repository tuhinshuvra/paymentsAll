import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree, userNameOne, userDesigOne, userFeedbackOne, userNameTwo, userDesigTwo, userFeedbackTwo, userNameThree, userDesigThree, userFeedbackThree }) => {

    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col   py-3">
                    <div className="carsosolItemArea ">
                        <ImQuotesLeft className=' feedbackQuote'></ImQuotesLeft>
                        <p className='feebdackText col-11 my-4'>{userFeedbackOne}</p>
                        <div className=" d-flex">
                            <img className="feedbackUser" src={imgOne} alt="Card_image_cap" />
                            <div className='ms-2 feedbackUserName'>
                                <p className='feedbackUserName'>{userNameOne}</p>
                                <p className='feedbackUserDesig'>{userDesigOne}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col d-none d-md-block   py-3">
                    <div className="carsosolItemArea ">
                        <ImQuotesLeft className=' feedbackQuote'></ImQuotesLeft>
                        <p className='feebdackText col-11 my-4'>{userFeedbackTwo}</p>
                        <div className=" d-flex">
                            <img className="feedbackUser" src={imgTwo} alt="Card_image_cap" />
                            <div className='ms-2 feedbackUserName'>
                                <p className='feedbackUserName'>{userNameTwo}</p>
                                <p className='feedbackUserDesig'>{userDesigTwo}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col d-none d-xl-block   py-3">
                    <div className="carsosolItemArea ">
                        <ImQuotesLeft className=' feedbackQuote'></ImQuotesLeft>
                        <p className='feebdackText col-11 my-4'>{userFeedbackThree}</p>
                        <div className=" d-flex">
                            <img className="feedbackUser" src={imgThree} alt="Card_image_cap" />
                            <div className='ms-2 feedbackUserName'>
                                <p className='feedbackUserName'>{userNameThree}</p>
                                <p className='feedbackUserDesig'>{userDesigThree}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridCarousolItem;