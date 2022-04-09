import React, { Component } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

class SideDrawer extends Component {

    state = {
        drawer: false
    };

    closeDrawer = () => {
        this.props.onClick(this.state.drawer);
    }

    render() {
        return (
            <div className="sidebar-modal">  
                <div 
                    className="modal right fade show" 
                    style={{
                        display: "block", paddingRight: "16px"
                    }}
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button 
                                    type="button" 
                                    className="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close"
                                    onClick={this.closeDrawer}
                                >
                                    <span aria-hidden="true"><i className="icofont-close"></i></span>
                                </button>

                                <h2 className="modal-title" id="myModalLabel2">
                                    <Link href="/">
                                        <a>
                                            <img src={process.env.NEXT_PUBLIC_URL+this.props.logo.imagen.data.attributes.url} alt="logo" />
                                        </a>
                                    </Link>
                                </h2>
                            </div>

                            <div className="modal-body">
                                {/* <div className="sidebar-modal-widget">
                                    <h3 className="title">Additional Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/login">
                                                <a>Login</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/signup">
                                                <a>Register</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <a>FAQ</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#">
                                                <a>Logout</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                                
                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Contact Info</h3>

                                    <ul className="contact-info">
                                        <li>
                                            <i className="icofont-google-map"></i>
                                            Address
                                            {ReactHtmlParser(this.props.contacto.direccion)}
                                        </li>
                                        <li>
                                            <i className="icofont-email"></i>
                                            Email
                                            {ReactHtmlParser(this.props.contacto.email)}
                                        </li>
                                        <li>
                                            <i className="icofont-phone"></i>
                                            Phone
                                            {ReactHtmlParser(this.props.contacto.telefono)}
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div className="sidebar-modal-widget">
                                    <h3 className="title">Connect With Us</h3>

                                    <ul className="social-list">
                                        <li>
                                            <Link href={this.props.contacto.facebook}>
                                                <a target="_blank"><i className="icofont-facebook"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={this.props.contacto.youtube}>
                                                <a target="_blank"><i className="icofont-youtube"></i></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={this.props.contacto.instagram}>
                                                <a target="_blank"><i className="icofont-instagram"></i></a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href={"https://wa.me/"+this.props.contacto.numero_whatsapp+"/?text="+this.props.contacto.mensaje_whatsapp}>
                                                <a target="_blank"><i className="icofont-whatsapp"></i></a>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideDrawer;
