import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import FooterLogo from "../../../../assets/logo/payments_all_logo.png";
import GooglePlayStore from "../../../../assets/apps_store/google_play_store.png";
import AppleStore from "../../../../assets/apps_store/apple_store.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer_bg ">
            <div className="container footer_bg text-white">
                <footer className="pt-3">
                    <div className="row">
                        <div className="col-12 col-lg-4  d-flex  flex-column justify-content-center align-items-center">
                            <div className='d-flex justify-content-center'>
                                <Link to="/"> <img className='footer_logo' src={FooterLogo} alt="" /></Link>
                            </div>
                            <h5 className="text-center fw-bold mt-2"></h5>
                            <p className="text-center fw-bold">All Payments Solution in One Platform</p>
                            <p className="text-center">
                                <small>

                                </small>
                            </p>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3 ">
                            <div className=''>

                                <div className=''>
                                    <h5 className='text-center'>Offers</h5>
                                </div>

                                <ul className="nav flex-column">
                                    <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Offers</Link></li>
                                    <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold"> Partners</Link></li>
                                    <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold"> Services</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3">
                            <h5 className='text-center '>Features</h5>
                            <ul className="nav flex-column">
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Features</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">My Jobs Panel</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">List of Features</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3">
                            <h5 className='text-center'>Services</h5>
                            <ul className="nav flex-column">
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">Services</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">FAQ</Link></li>
                                <li className="mb-2 text-center"><Link to="/" className="  footer_btn fw-bold">About</Link></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-2 col-md-3 mb-3">
                            <h5 className=' text-center'>App Store</h5>
                            <ul className="nav flex-column">
                                <li className=" text-center">
                                    <div className="">
                                        <a href={`https://play.google.com/store/apps/details?id=com.paymentsall.app`} target="_blank" rel="noreferrer">
                                            <img className=" appStore mt-1" src={GooglePlayStore} alt="" />
                                        </a>
                                        <a href={`https://play.google.com/store/apps/details?id=com.paymentsall.app`} target="_blank" rel="noreferrer">
                                            <img className=" appStore mt-1" src={AppleStore} alt="" />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className=" my-0" />

                    <div className=" d-flex justify-content-center">
                        <div className=" ">
                            <a className="text-decoration-none text-white fs-3" href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer">  <FaFacebookF></FaFacebookF> </a>
                            <a className="text-decoration-none text-white fs-3" href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer">   <BsYoutube></BsYoutube></a>
                            <a className="text-decoration-none text-white fs-3" href="https://www.facebook.com/GorgeousBangladeshLtd/" target="_blank" rel="noreferrer">   <BsTwitter></BsTwitter></a>
                        </div>
                    </div>

                    <div>
                        <p className='text-center mb-0  text-white'> <small>Copyright @ 2023, All right reserved by paymentsall.com</small></p>
                    </div>
                </footer >
            </div >
        </footer >
    );
};

export default Footer;
