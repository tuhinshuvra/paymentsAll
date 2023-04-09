import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/logo/payments_all_logo.png'
import AppImage from '../../../../assets/payments_all_app.png'
import DiscountStar from '../../../../assets/parcent-star.png'
import { AiOutlineRight, AiFillStar } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
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
                                    <Link onClick={() => setIsOpen(true)} className="nav-link active  text-white" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => setIsOpen(false)} className="nav-link  text-white" to="/aboutus">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => setIsOpen(false)} className="nav-link  text-white" to="/features">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => setIsOpen(false)} className="nav-link  text-white" to="/solution">Soution</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => setIsOpen(false)} className="nav-link  text-white" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => setIsOpen(false)} className="nav-link  text-white" to="/signup">Signup</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

            {/* Hero Section */}

            {isOpen
                ?
                <div className='col-md-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-8 text-white hero_area '>

                            <div className=' text-md-start text-center'>
                                <span className='discount rounded-5'><img className='discount_star' src={DiscountStar} alt="" />25% DISCOUNT FOR 1 MONTH ACCOUNT</span>
                            </div>
                            <h1 className='hero_heading my-3 '>The Next <br /><span className=' hero_text_middle'> Generation </span><br /> Payment Method</h1>

                            <div className=' col-lg-8 '>
                                <p className='hero_sub_text my-4 text-center text-md-start '>Get the ultimate benifits of using the latest technology of Financial Management with us</p>
                            </div>

                            <div className=' d-flex justify-content-md-start justify-content-center'>
                                <Link className=' payments_btn'>Get Started Now</Link>
                                <Link className='  ms-4 payments_outLine_btn '>How it works<AiOutlineRight /></Link>
                            </div>


                            <div className='col-md-9 me-auto px-2 px-md-0'>
                                <div className='d-flex justify-content-md-between justify-content-center my-5'>

                                    <div className=' text-center'>
                                        <h3 className=' timmer_counter_number'>6K+</h3>
                                        <p className='hero_sub_text'>ACTIVE USER</p>
                                    </div>
                                    <div className=' text-center'>
                                        <h3 className=' timmer_counter_number'>110+</h3>
                                        <p className='hero_sub_text mx-3 mx-md-0'>TRUSTED BY COMPANIES</p>
                                    </div>
                                    <div className=' text-center'>
                                        <h3 className=' timmer_counter_number'>$ 230 M+</h3>
                                        <p className='hero_sub_text'>TRANSATIONS</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className='col-md-4 d-none d-md-block'>
                            <img className='app_image' src={AppImage} alt="" />
                        </div>
                    </div>
                </div>
                :
                <>
                </>
            }
        </div>
    );
};

export default Navbar;