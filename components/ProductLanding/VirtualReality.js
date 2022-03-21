import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class VirtualReality extends Component {
    render() {
        return (
            <section className="next-generation-virtual-reality ptb-100">
                <div className="container">
                    <div className="section-title">
                        {console.log(this.props)}
                        <h2>{this.props.seccion.titulo}</h2>
                        <div className="bar"></div>
                        
                    </div>
                    
                    <div className="row">
                    {
                        this.props.seccion.items.map(
                            (razon) => (
                                
                                <>
            
                                <div className="col-lg-6 col-md-6">
                            <div className="single-item">
                                <div className="icon">
                                    {/* <i className="icofont-listine-dots"></i> */}
                                    <img src={process.env.NEXT_PUBLIC_URL+razon.icono.data.attributes.url}/>
                                </div>
                                <h3>{ReactHtmlParser(razon.titulo)}</h3>
                                {ReactHtmlParser(razon.descripcion)}
                            </div>
                        </div>
                        </>
                                
                                )
                        )
                    }

                        

                       {/*  <div className="col-lg-6 col-md-6">
                            <div className="single-item">
                                <div className="icon">
                                    <i className="icofont-camera-alt"></i>
                                </div>
                                <h3>User Experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo porttitor pretium ullamcorper. Fusce consectetur turpis nec dolor laoreet ultrices. In a venenatis leo.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-item">
                                <div className="icon">
                                    <i className="icofont-responsive"></i>
                                </div>
                                <h3>Web and Mobile Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo porttitor pretium ullamcorper. Fusce consectetur turpis nec dolor laoreet ultrices. In a venenatis leo.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-item">
                                <div className="icon">
                                    <i className="icofont-brand-fastrack"></i>
                                </div>
                                <h3>Project Strategy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo porttitor pretium ullamcorper. Fusce consectetur turpis nec dolor laoreet ultrices. In a venenatis leo.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-item">
                                <div className="icon">
                                    <i className="icofont-sand-clock"></i>
                                </div>
                                <h3>Full Demo Content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo porttitor pretium ullamcorper. Fusce consectetur turpis nec dolor laoreet ultrices. In a venenatis leo.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-item">
                                <div className="icon">
                                    <i className="icofont-cloudy"></i>
                                </div>
                                <h3>Engaging Tours</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida leo porttitor pretium ullamcorper. Fusce consectetur turpis nec dolor laoreet ultrices. In a venenatis leo.</p>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
        );
    }
}

export default VirtualReality;
