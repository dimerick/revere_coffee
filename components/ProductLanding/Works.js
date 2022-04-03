import React from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import ReactHtmlParser from 'react-html-parser';

const images = [
    
]



const Works = (props) => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    
    props.seccion.items.data.map(
        (item, i, arr) => (
            images.push(process.env.NEXT_PUBLIC_URL+item.attributes.url)

            ))
    
            
    return (
        <section id="gallery" className="gallery-area ptb-100 pb-0">
            <div className="container">
                <div className="section-title">
                    <h2>{props.seccion.titulo}</h2>
                    <div className="bar"></div>
                    {ReactHtmlParser(props.seccion.descripcion)}
                </div>
            </div>

            {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

            <div className="row m-0">

                {
                    props.seccion.items.data.map(
                        (item, i, arr) => (
                            <>
                            <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src={process.env.NEXT_PUBLIC_URL+item.attributes.url} alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(i);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>
                            </>
                        )
                        )
                }

                {/* <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery1.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(0);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery2.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(1);}}
                        >
                            <i className="icofont-plus"></i>
                        </div>
                    </div>
                </div>

                

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery3.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(2);}}
                        >
                            <i className="icofont-plus"></i>
                        </div> 
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery4.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(3);}}
                        >
                            <i className="icofont-plus"></i>
                        </div> 
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery5.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(4);}}
                        >
                            <i className="icofont-plus"></i>
                        </div> 
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery6.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(5);}}
                        >
                            <i className="icofont-plus"></i>
                        </div> 
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery7.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(6);}}
                        >
                            <i className="icofont-plus"></i>
                        </div> 
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 p-0">
                    <div className="single-image">
                        <img src='/images/gallery8.jpg' alt="gallery" />
                        <div 
                            className="popup-btn"
                            onClick={e => { setIsOpenImage(true); setPhotoIndex(7);}}
                        >
                            <i className="icofont-plus"></i>
                        </div> 
                    </div>
                </div> */}

            </div>
        </section>
    );
}

export default Works;
