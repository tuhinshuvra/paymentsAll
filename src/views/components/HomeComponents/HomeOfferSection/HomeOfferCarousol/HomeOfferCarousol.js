import React from 'react';
import GridCarousolItem from './GridCarousolItem/GridCarousolItem';

import OfferOne from '../../../../../assets/offer/Add-Money-from-Mastercard_Thmbnail_EN_545X310.jpg';
import OfferTwo from '../../../../../assets/offer/BD-Railway_Thumbnail-EN_545x310.jpg';
import OfferThree from '../../../../../assets/offer/SSL-Eid-Campaign_Thumbnail-EN_545x310.jpg';
import OfferFour from '../../../../../assets/offer/Walton-10_Thumbnail-EN_545x310.jpg';
import OfferFive from '../../../../../assets/offer/Web-Banner-Thum-Eng_545X310.jpg';
import OfferSix from '../../../../../assets/offer/SSL-Eid-Campaign_Thumbnail-EN_545x310.jpg';
import OfferSeven from '../../../../../assets/offer/Add-Money-from-Mastercard_Thmbnail_EN_545X310.jpg';
import OfferEight from '../../../../../assets/offer/Walton-10_Thumbnail-EN_545x310.jpg';
import OfferNine from '../../../../../assets/offer/Walton-10_Thumbnail-EN_545x310.jpg';

const HomeOfferCarousol = () => {
    return (
        <div className='col-10 mx-auto'>
            <div id="offerGridCarousol" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active shadow" data-bs-interval="4000">
                        <GridCarousolItem
                            imgOne={OfferOne}
                            imgTwo={OfferTwo}
                            imgThree={OfferThree}
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <GridCarousolItem
                            imgOne={OfferSeven}
                            imgTwo={OfferEight}
                            imgThree={OfferNine}
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <GridCarousolItem
                            imgOne={OfferThree}
                            imgTwo={OfferFour}
                            imgThree={OfferSix}
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <GridCarousolItem
                            imgOne={OfferTwo}
                            imgTwo={OfferThree}
                            imgThree={OfferFour}
                        ></GridCarousolItem>
                    </div>

                    <div className="carousel-item" data-bs-interval="6000">
                        <GridCarousolItem
                            imgOne={OfferFour}
                            imgTwo={OfferFive}
                            imgThree={OfferSix}
                        ></GridCarousolItem>
                    </div>

                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#offerGridCarousol" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon forPrevIcon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#offerGridCarousol" data-bs-slide="next">
                    <span className="carousel-control-next-icon forNextIcon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default HomeOfferCarousol;