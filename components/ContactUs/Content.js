import React, { Component } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

class Content extends Component {
    render() {
        return (
            <>
            <div id="main" className="ptb-50"></div>
            <section className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-email"></i>
                                </div>
                                <h3>Mail Here</h3>
                                {ReactHtmlParser(this.props.contacto.email)}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-google-map"></i>
                                </div>
                                <h3>Visit Here</h3>
                                {ReactHtmlParser(this.props.contacto.direccion)}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <i className="icofont-phone"></i>
                                </div>
                                <h3>Call Here</h3>
                                {ReactHtmlParser(this.props.contacto.telefono)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Content;
