import React, { Component } from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

class Features extends Component {
    

    render() {
        return (
            <section className="features-area product-features ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-holder-content">
                                <div className="section-title">
                                    <h2>{this.props.seccion.titulo}</h2>
                                    <div className="bar"></div>
                                    {ReactHtmlParser(this.props.seccion.descripcion)}
                                </div>

                                <Link href="/services">
                                    <a className="btn btn-primary">Our Services</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">



                     {
                        this.props.seccion.items.map(
                            (item, i, arr) => (
                                
                                

                                i%2==0 && arr[i+1]?
                                <>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-holder-box mt-50">
                                        <img src={arr[i] && process.env.NEXT_PUBLIC_URL+arr[i].imagen.data.attributes.url} alt="image" />
                                        <h3>{arr[i] && ReactHtmlParser(arr[i].titulo)} </h3>
                                        {arr[i] && ReactHtmlParser(arr[i].descripcion)}
                                    </div>

                                    <div className="single-holder-box mt-30">
                                        <img src={process.env.NEXT_PUBLIC_URL+arr[i+1].imagen.data.attributes.url} alt="image" />
                                        <h3>{ReactHtmlParser(arr[i+1].titulo)}</h3>
                                        {ReactHtmlParser(arr[i+1].descripcion)}
                                    </div>
                                </div>
                                </>
                                :
                                i%2==0?
                                <>
                                <div className="col-lg-6 col-md-6">
                                <div className="single-holder-box mt-50">
                                        <img src={arr[i] && process.env.NEXT_PUBLIC_URL+arr[i].imagen.data.attributes.url} alt="image" />
                                        <h3>{arr[i] && ReactHtmlParser(arr[i].titulo)} </h3>
                                        {arr[i] && ReactHtmlParser(arr[i].descripcion)}
                                    </div>
                                </div>
                                </>
                                :
                                <>
                                </>
                                
                                )
                        )
                    }


                                

                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-inner-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-inner-content">

                                {
                        this.props.seccion2.items.map(
                            (item, i, arr) => (
                            <>
                            <div className="features-item">
                                        <div className="icon">
                                        <img src={process.env.NEXT_PUBLIC_URL+item.imagen.data.attributes.url} alt="image" />
                                        </div>
                                        <h3>{item.titulo}</h3>
                                        {ReactHtmlParser(item.descripcion)}
                                    </div>
                            </>

                            ))}

                                    {/* <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-download"></i>
                                        </div>
                                        <h3>Install Apps</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-tracking"></i>
                                        </div>
                                        <h3>GPS Tracking</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-qr-code"></i>
                                        </div>
                                        <h3>QR Code Scaner</h3>
                                        <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</p>
                                    </div> */}
                                    
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-image text-center">
                                    <img src={process.env.NEXT_PUBLIC_URL+this.props.seccion2.imagen.data.attributes.url} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shape7"><img src='/images/shape7.png' alt="shape" /></div>
                <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                <div className="shape10"><img src='/images/shape10.svg' alt="shape" /></div>
                <div className="shape11 rotateme"><img src='/images/shape11.svg' alt="shape" /></div>
            </section>
        );
    }
}

export default Features;
