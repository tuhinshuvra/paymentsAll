import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import Logo from '../../../../assets/logo/payments_all_logo.png'
import AppImage from '../../../../assets/payments_all_app.png'
import DiscountStar from '../../../../assets/parcent-star.png'
import GooglePlayStore from "../../../../assets/apps_store/google_play_store.png";
import AppleStore from "../../../../assets/apps_store/apple_store.png";
import SupportHomeSection from './SupportHomeSection';
import SupportOtherSection from './SupportOtherSection';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    console.log("Is OPen : ", isOpen);

    // const navHeroRectangle = {
    //     clipPath: "polygon(0 0%, 100% 0, 100% 70%, 0 100%)",
    // };

    return (
        <div>
            <div className='nav_hero_bg'>

                <div className='  col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg  bg-body-tertiary">
                        <div className="container-fluid">
                            <Link onClick={() => setIsOpen(true)} to="/">
                                <img className='logo' src={Logo} alt="" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link onClick={() => setIsOpen(true)} className="nav_button nav-link active  text-white" aria-current="page" to="/">Home</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/aboutus">About Us</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/features">Features</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/offers">Offers</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/safty">Safty</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/getStarted">Get Started</Link>
                                    </li>

                                    {/* <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link onClick={() => setIsOpen(false)} className="nav_button nav-link  text-white" to="/signup">Signup</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>


                {/* Hero Section start */}

                {isOpen &&

                    <div className='col-md-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-7 text-white hero_area '>

                                <div className=' text-md-start text-center'>
                                    <span className='discount rounded-5'><img className='discount_star' src={DiscountStar} alt="" />25% DISCOUNT FOR 1 MONTH ACCOUNT</span>
                                </div>
                                <h1 className='hero_heading my-3 '>The Next <br /><span className=' hero_text_middle'> Generation </span><br /> Payment Method</h1>

                                <div className=' col-lg-8 '>
                                    <p className='hero_sub_text my-4 text-center text-md-start '> We are Willing to Make a Cashless Society All Over The World</p>
                                </div>

                                <div className=' d-flex justify-content-md-start justify-content-center'>
                                    <div className="">
                                        <a href={`https://play.google.com/store/apps/details?id=com.paymentsall.app`} target="_blank" rel="noreferrer">
                                            <img className=" appStore mt-1" src={GooglePlayStore} alt="" />
                                        </a>
                                        <a className=' ms-5' href={`https://play.google.com/store/apps/details?id=com.paymentsall.app`} target="_blank" rel="noreferrer">
                                            <img className=" appStore mt-1" src={AppleStore} alt="" />
                                        </a>
                                    </div>
                                </div>


                                <div className='col-md-9 me-auto px-2 px-md-0'>
                                    <div className='d-flex justify-content-md-between justify-content-center my-5'>

                                        <div className='text-center'>
                                            <h3 className='timmer_counter_number'>6K+</h3>
                                            <p className='hero_sub_text'>ACTIVE USER</p>
                                        </div>
                                        <div className='text-center'>
                                            <h3 className='timmer_counter_number'>110+</h3>
                                            <p className='hero_sub_text mx-3 mx-md-0'>TRUSTED BY COMPANIES</p>
                                        </div>
                                        <div className='text-center'>
                                            <h3 className='timmer_counter_number'>$ 230 M+</h3>
                                            <p className='hero_sub_text'>TRANSATIONS</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {
                isOpen &&
                <div className='col-md-5 d-none d-md-block'>
                    <img className='app_image' src={AppImage} alt="" />
                </div>
            }

            {
                isOpen ?
                    <>
                        <SupportHomeSection></SupportHomeSection>
                    </>
                    :
                    <>
                        <SupportOtherSection></SupportOtherSection>
                    </>
            }

        </div>
    );
};

export default Navbar;