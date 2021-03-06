import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ReactHtmlParser from 'react-html-parser';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: true,
    nav: true,
    loop:false,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    margin: 30,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ],
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
}

class LatestProducts extends Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section id="products" className="product-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.seccion.titulo}</h2>
                        <div className="bar"></div>
                        {ReactHtmlParser(this.props.seccion.descripcion)}
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="product-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {
                        this.props.productos.map(
                            (item, i, arr) => (
                                <>
                                <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src={process.env.NEXT_PUBLIC_URL+item.attributes.imagenes.data[0].attributes.url} alt="item" />

                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href={"/product/"+item.attributes.seo}>
                                                <a>{item.attributes.nombre}</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>${item.attributes.precio} <span></span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </>

                            ))}

                            {/* <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/shop-item1.jpg' alt="item" />

                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop-details">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/shop-item2.jpg' alt="item" />
                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop-details">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/shop-item3.jpg' alt="item" />
                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop-details">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/shop-item4.jpg' alt="item" />

                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop-details">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/shop-item5.jpg' alt="item" />

                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop-details">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="single-product">
                                    <div className="product-img">
                                        <img src='/images/shop-item6.jpg' alt="item" />

                                        <Link href="/cart">
                                            <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop-details">
                                                <a>Drop Side Watch</a>
                                            </Link>
                                        </h3>

                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-6">
                                                <h5>$8.50 <span>$12.00</span></h5>
                                            </div>

                                            <div className="col-lg-7 col-6">
                                                <ul>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                    <li><i className="icofont-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default LatestProducts;
