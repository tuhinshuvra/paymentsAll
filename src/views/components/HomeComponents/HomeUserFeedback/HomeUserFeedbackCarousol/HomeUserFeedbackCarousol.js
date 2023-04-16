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
                            userNameOne={"Mohammad Karim"}
                            userDesigOne={"CEO, Global Group"}
                            userFeedbackOne="This app is most user frieldly and easy to access and first loading app, I am one of fans of this app."

                            imgTwo={ClientsTwo}
                            userNameTwo={"Md Mohib Billah"}
                            userDesigTwo={"Manager, Arman Tech"}
                            userFeedbackTwo="I am very much satisfied whth this app and I adviced my frieds to use this app all time.I love this app."

                            imgThree={ClientsThree}
                            userNameThree={"Md. Gias Uddin"}
                            userDesigThree={"CEO, Jamuna Group"}
                            userFeedbackThree="At first when I heard about this app after from I am every day using this app. A adviced everybody to use this. "
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000"  >
                        <GridCarousolItem
                            imgOne={ClientsFour}
                            userNameOne={"Mohammad Hasan"}
                            userDesigOne={"CEO, Global Group"}
                            userFeedbackOne="This app is most user frieldly and easy to access and first loading app, I am one of fans of this app."

                            imgTwo={ClientsFive}
                            userNameTwo={"Chowdhury Kamal"}
                            userDesigTwo={"Manager, Arman Tech"}
                            userFeedbackTwo="I am very much satisfied whth this app and I adviced my frieds to use this app all time.I love this app."

                            imgThree={ClientsSix}
                            userNameThree={"Md. Jamal Uddin"}
                            userDesigThree={"CEO, Jamuna Group"}
                            userFeedbackThree="At first when I heard about this app after from I am every day using this app. A adviced everybody to use this. "
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000"  >
                        <GridCarousolItem
                            imgOne={ClientsSeven}
                            userNameOne={"Bikash Chandro"}
                            userDesigOne={"CEO, Global Group"}
                            userFeedbackOne="This app is most user frieldly and easy to access and first loading app, I am one of fans of this app."

                            imgTwo={ClientsEight}
                            userNameTwo={"Md Lord Arefin"}
                            userDesigTwo={"Manager, Arman Tech"}
                            userFeedbackTwo="I am very much satisfied whth this app and I adviced my frieds to use this app all time.I love this app."

                            imgThree={ClientsNine}
                            userNameThree={"Md. ParveJ kamal"}
                            userDesigThree={"CEO, Jamuna Group"}
                            userFeedbackThree="At first when I heard about this app after from I am every day using this app. A adviced everybody to use this. "
                        ></GridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="6000"  >
                        <GridCarousolItem
                            imgOne={ClientsOne}
                            userNameOne={"Mohammad Karim"}
                            userDesigOne={"CEO, Global Group"}
                            userFeedbackOne="This app is most user frieldly and easy to access and first loading app, I am one of fans of this app."

                            imgTwo={ClientsTwo}
                            userNameTwo={"Md Mohib Billah"}
                            userDesigTwo={"Manager, Arman Tech"}
                            userFeedbackTwo="I am very much satisfied whth this app and I adviced my frieds to use this app all time.I love this app."

                            imgThree={ClientsThree}
                            userNameThree={"Md. Gias Uddin"}
                            userDesigThree={"CEO, Jamuna Group"}
                            userFeedbackThree="At first when I heard about this app after from I am every day using this app. A adviced everybody to use this. "
                        ></GridCarousolItem>
                    </div>

                    <div className="carousel-item" data-bs-interval="6000">
                        <GridCarousolItem
                            imgOne={ClientsFour}
                            userNameOne={"Nadim hasan"}
                            userDesigOne={"CEO, Global Group"}
                            userFeedbackOne="This app is most user frieldly and easy to access and first loading app, I am one of fans of this app."

                            imgTwo={ClientsFive}
                            userNameTwo={"Provath Acharjo"}
                            userDesigTwo={"Manager, Arman Tech"}
                            userFeedbackTwo="I am very much satisfied whth this app and I adviced my frieds to use this app all time.I love this app."

                            imgThree={ClientsSix}
                            userNameThree={"Md. Billal hossain"}
                            userDesigThree={"CEO, Jamuna Group"}
                            userFeedbackThree="At first when I heard about this app after from I am every day using this app. A adviced everybody to use this. "
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