import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ReactHtmlParser from 'react-html-parser';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Lightbox from 'react-image-lightbox';

const images = [
   
]

class DetailsContent extends Component {

    state = {
        isOpen: false,
        photoIndex: 0,
        isOpenImage: false,
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    

    render() {
        this.props.seccion.imagenes.data.map(
            (item, i, arr) => (
                images.push(process.env.NEXT_PUBLIC_URL+item.attributes.url)
    
                ))

        const { photoIndex, isOpenImage } = this.state;
        return (
            <>  
                <ModalVideo 
                    channel={this.props.seccion.canal} 
                    isOpen={this.state.isOpen} 
                    videoId={this.props.seccion.url_video} 
                    onClose={() => this.setState({isOpen: false})} 
                />
                
                <section id="experiences" className="project-details-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src={process.env.NEXT_PUBLIC_URL+this.props.seccion.imagen.data.attributes.url} alt="work" />
    
                                    <div 
                                        className="popup-youtube"
                                        onClick={e => {this.openModal()}}
                                    >
                                        <i className="icofont-ui-play"></i>
                                    </div> 
                                </div>
                            </div>
                            
                            {
                                this.props.seccion.imagenes.data.map(
                                    (item, i, arr) => (
                                        
                                        <>
                                        <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src={process.env.NEXT_PUBLIC_URL+item.attributes.url} alt="work" />
                                    <div 
                                        className="popup-btn"
                                        onClick={e => { this.setState({ isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div>
                                        </>
                                        
                            
                                        ))
                            }
                             
                            {/* <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src='/images/work-img2.jpg' alt="work" />
                                    <div 
                                        className="popup-btn"
                                        onClick={e => { this.setState({ isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div> */}

                            {/* <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src='/images/work-img4.jpg' alt="work" />
                                    <div 
                                        className="popup-youtube"
                                        onClick={e => { this.openModal()}}
                                    >
                                        <i className="icofont-ui-play"></i>
                                    </div> 
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="project-details-image">
                                    <img src='/images/work-img3.jpg' alt="work" />
                                    <div 
                                        className="popup-btn"
                                        onClick={e => { this.setState({ isOpenImage: true })}}
                                    >
                                        <i className="icofont-plus"></i>
                                    </div> 
                                </div>
                            </div> */}

                            {isOpenImage && (
                                <Lightbox
                                    mainSrc={images[photoIndex]}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => this.setState({ isOpenImage: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                    }
                                />
                            )}

                            <div className="col-lg-12 col-md-12">
                                <div className="project-details-desc">
                                    <h3>{this.props.seccion.titulo}</h3>
                                    {ReactHtmlParser(this.props.seccion.descripcion)}

                                    {/* <div className="project-details-information">
                                        <div className="single-info-box">
                                            <h4>Happy Client</h4>
                                            <p>John Doe</p>
                                        </div>

                                        <div className="single-info-box">
                                            <h4>Category</h4>
                                            <p>Portfolio, Persoanl</p>
                                        </div>

                                        <div className="single-info-box">
                                            <h4>Date</h4>
                                            <p>February 28, 2019</p>
                                        </div>

                                        <div className="single-info-box">
                                            <h4>Share</h4>
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/" target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="single-info-box">
                                            <Link href="#">
                                                <a className="btn btn-primary">Live Preview</a>
                                            </Link>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default DetailsContent;
