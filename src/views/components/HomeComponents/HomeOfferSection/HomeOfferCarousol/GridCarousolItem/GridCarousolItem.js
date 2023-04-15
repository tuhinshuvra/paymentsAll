import React from 'react';
import { Link } from 'react-router-dom';
import './GridCarousolItem.css';

const GridCarousolItem = ({ imgOne, imgTwo, imgThree }) => {
    return (
        <div className="container">
            <div className="row gx-5">
                <div className="col">
                    <div className="">
                        <img className=" img-fluid rounded-3 " src={imgOne} alt="Card_image_cap" />

                        {/* <div className='text-center'>
                            <Link className=' text-decoration-none '><button className='payments_btn my-2'>Show Details</button></Link>
                        </div> */}
                    </div>
                </div>
                <div className="col d-none d-md-block">
                    <div className=" shadow">
                        <img className=" img-fluid rounded-3" src={imgTwo} alt="Card_image_cap" />
                    </div>

                    {/* <div className='text-center'>
                        <Link className=' text-decoration-none '><button className='payments_btn my-2'>Show Details</button></Link>
                    </div> */}

                </div>
                <div className="col d-none d-xl-block">
                    <div className=" shadow">
                        <img className=" img-fluid rounded-3" src={imgThree} alt="Card_image_cap" />
                    </div>

                    {/* <div className='text-center'>
                        <Link className=' text-decoration-none '><button className='payments_btn my-2'>Show Details</button></Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default GridCarousolItem;