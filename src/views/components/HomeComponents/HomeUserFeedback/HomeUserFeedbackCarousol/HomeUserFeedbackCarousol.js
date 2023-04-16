import React from 'react';
import GridCarousolItem from './GridCarousolItem/GridCarousolItem';

import ClientsOne from '../../../../../assets/clients/clients_1.jpg';
import ClientsTwo from '../../../../../assets/clients/clients_2.png';
import ClientsThree from '../../../../../assets/clients/clients_3.jpg';
import ClientsFour from '../../../../../assets/clients/clients_4.jpg';
import ClientsFive from '../../../../../assets/clients/clients_5.jpg';
import ClientsSix from '../../../../../assets/clients/clients_6.jpg';
import ClientsSeven from '../../../../../assets/clients/clients_2.png';
import ClientsEight from '../../../../../assets/clients/clients_3.jpg';
import ClientsNine from '../../../../../assets/clients/clients_4.jpg';

const HomeUserFeedbackCarousol = () => {
    return (
        <div className='col-10 mx-auto animate_bottom'>
            <div id="clientsGridCarousol" className="carousel  slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000"  >
                        <GridCarousolItem
                            imgOne={ClientsOne}
                            imgTwo={ClientsTwo}
                            imgThree={ClientsThree}
                            userDataOne={"Mohammad Karim <br/>   CEO, Global Group"}
                            userDataTwo={"Md Mohib Billah <br/>   Manager, Arman Tech"}
                            userDataThree={"Md. Gias Uddin <br/>   CEO, Jamuna Group"}
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000"  >
                        <GridCarousolItem
                            imgOne={ClientsSeven}
                            imgTwo={ClientsEight}
                            imgThree={ClientsNine}
                            userDataOne={"Mohammad Karim <br/>   CEO, Global Group"}
                            userDataTwo={"Md Mohib Billah <br/>   Manager, Arman Tech"}
                            userDataThree={"Md. Gias Uddin <br/>   CEO, Jamuna Group"}
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000"  >
                        <GridCarousolItem
                            imgOne={ClientsThree}
                            imgTwo={ClientsFour}
                            imgThree={ClientsSix}
                            userDataOne={"Mohammad Karim <br/>   CEO, Global Group"}
                            userDataTwo={"Md Mohib Billah <br/>   Manager, Arman Tech"}
                            userDataThree={"Md. Gias Uddin <br/>   CEO, Jamuna Group"}
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000"  >
                        <GridCarousolItem
                            imgOne={ClientsTwo}
                            imgTwo={ClientsThree}
                            imgThree={ClientsFour}
                            userDataOne={"Mohammad Karim <br/>   CEO, Global Group"}
                            userDataTwo={"Md Mohib Billah <br/>   Manager, Arman Tech"}
                            userDataThree={"Md. Gias Uddin <br/>   CEO, Jamuna Group"}
                        ></GridCarousolItem>
                    </div>

                    <div className="carousel-item" data-bs-interval="6000">
                        <GridCarousolItem
                            imgOne={ClientsFour}
                            imgTwo={ClientsFive}
                            imgThree={ClientsSix}
                            userDataOne={"Mohammad Karim <br/>   CEO, Global Group"}
                            userDataTwo={"Md Mohib Billah <br/>   Manager, Arman Tech"}
                            userDataThree={"Md. Gias Uddin <br/>   CEO, Jamuna Group"}
                        ></GridCarousolItem>
                    </div>

                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#clientsGridCarousol" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon preIcon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#clientsGridCarousol" data-bs-slide="next">
                    <span className="carousel-control-next-icon nextIcon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default HomeUserFeedbackCarousol;