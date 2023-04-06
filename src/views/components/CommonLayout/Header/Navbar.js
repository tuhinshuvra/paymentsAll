import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/logo/payments_all_logo.png'
import AppImage from '../../../../assets/payments_all_app.png'
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className='nav_hero_bg'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link onClick={() => setIsOpen(true)} to="/">
                        <img className='logo' src={Logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
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

            {/* Hero Section */}

            {isOpen
                ?
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-8 text-white hero_area '>
                            <span className='discount rounded '>25% Discount for 1 month account</span>
                            <h1 className='fs-1 my-3 '>The Next <br /> Generation <br /> Payment Method</h1>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illo possimus distinctio consectetur dolorum eum quos aut culpa optio sint! </p>

                            <div className=' d-flex'>
                                <button className='btn btn-primary'>Get Started Now</button>
                                <button className='btn btn-outline-primary ms-3'>Get Started Now</button>
                            </div>


                            <div className='col-8 me-auto'>
                                <div className='d-flex justify-content-between my-5'>

                                    <div className=' text-center'>
                                        <h3>6K+</h3>
                                        <p>ACTIVE USER</p>
                                    </div>
                                    <div className=' text-center'>
                                        <h3>110+</h3>
                                        <p>TRUSTED BY COMPANIES</p>
                                    </div>
                                    <div className=' text-center'>
                                        <h3>$230 M+</h3>
                                        <p>TRANSATIONS</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className='col-4'>
                            <img className='app_image' src={AppImage} alt="" />
                        </div>
                    </div>
                </div>
                :
                <>
                    {/* 154048 */}
                    {/* 123B43 */}
                </>
            }
        </div>
    );
};

export default Navbar;