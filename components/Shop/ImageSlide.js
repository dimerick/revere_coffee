import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: true,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause:true,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
}

class ImageSlide extends Component {

    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="col-lg-5 col-md-12">
                {this.state.display ? <OwlCarousel 
                    className="product-img-slides owl-carousel owl-theme"
                    {...options}
                >
                    
                    {
                        this.props.imagenes.map(
                            (item, i, arr) => (
                                <>
                                <div className="product-img">
                        <a href="#">
                            <img src={process.env.NEXT_PUBLIC_URL+item.attributes.url} alt="product-img" />
                        </a>
                    </div>
                                </>

                            ))}

                   {/*  <div className="product-img">
                        <a href="#">
                            <img src='http://31.220.52.62:1350/uploads/producto1_2663905f5c.jpg' alt="product-img" />
                        </a>
                    </div>

                    <div className="product-img">
                        <a href="#">
                            <img src='http://31.220.52.62:1350/uploads/producto1_2663905f5c.jpg' alt="product-img" />
                        </a>
                    </div>

                    <div className="product-img">
                        <a href="#">
                            <img src='http://31.220.52.62:1350/uploads/producto1_2663905f5c.jpg' alt="product-img" />
                        </a>
                    </div> */}
                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default ImageSlide;
