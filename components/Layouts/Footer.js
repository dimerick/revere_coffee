import React, { Component } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

class Footer extends Component {

    

    render() {
        const today = new Date();
        const year = today.getFullYear();
        return (
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <Link href="/saas">
                                    <a className="logo">
                                        <img src={process.env.NEXT_PUBLIC_URL+this.props.logo.imagen.data.attributes.url} alt="logo2" />
                                    </a>
                                </Link>
                                {ReactHtmlParser(this.props.seccion.descripcion)}

                                <ul className="social-list">
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100079191168876" target="_blank"><i className="icofont-facebook"></i></a>
                                    </li>
                                    
                                    <li>
                                        <a href="https://instagram.com/revere.coffee?utm_medium=copy_link" target="_blank"><i className="icofont-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://youtube.com/channel/UCvT4jHUU2usohihh5PfKf-A" target="_blank"><i className="icofont-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/#about-revere">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Products</h3>

                                <ul className="list">
                                    <li>
                                        <Link href="/#products">
                                            <a>Products</a>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="list">
                                    
                                    <li>
                                        <Link href="/contact#main">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq#main">
                                            <a>FAQ</a>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright &copy; {year} Revere. All rights reserved</p>
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/terms-conditions#main">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy#main">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
