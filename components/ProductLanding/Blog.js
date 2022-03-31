import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ReactHtmlParser from 'react-html-parser';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    autoplay: true,
    nav: true,
    loop:true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 30,
    dots: false,
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

class Blog extends React.Component {
    state = { display:false};

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.seccion.titulo}</h2>
                        <div className="bar"></div>
                        {ReactHtmlParser(this.props.seccion.descripcion)}
                    </div>

                    <div className="row">
                    {this.state.display ? <OwlCarousel 
                            className="blog-slides owl-carousel owl-theme"
                            {...options}
                        >

{
                        this.props.posts.map(
                            (item, i, arr) => (
                                <>
                                <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src={process.env.NEXT_PUBLIC_URL+item.attributes.imagen.data.attributes.url} alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-wall-clock"></i> {item.attributes.fecha}</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>{item.attributes.titulo}</a>
                                            </Link>
                                        </h3>
                                        {ReactHtmlParser(item.attributes.descripcion_corta)}
                                        <br/>
                                        <Link href={"/blog/"+item.attributes.seo}>
                                            <a className="read-more-btn">{item.attributes.texto_enlace}<i className="icofont-rounded-double-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                                </>
                            ))}

{/*                             <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src='/images/blog-img1.jpg' alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-user-male"></i> <Link href="/blog"><a>Admin</a></Link></li>
                                            <li><i className="icofont-wall-clock"></i> January 23, 2019</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Most Popular New Business Apps</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src='/images/blog-img2.jpg' alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-user-male"></i> <Link href="/blog"><a>Admin</a></Link></li>
                                            <li><i className="icofont-wall-clock"></i> January 16, 2019</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Best Marketing Management Tools</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src='/images/blog-img3.jpg' alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-user-male"></i> <Link href="/blog"><a>Admin</a></Link></li>
                                            <li><i className="icofont-wall-clock"></i> January 14, 2019</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Best Marketing Management Tools</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src='/images/blog-img4.jpg' alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-user-male"></i> <Link href="/blog"><a>Admin</a></Link></li>
                                            <li><i className="icofont-wall-clock"></i> January 06, 2019</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Best Marketing Management Tools</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src='/images/blog-img5.jpg' alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-user-male"></i> <Link href="/blog"><a>Admin</a></Link></li>
                                            <li><i className="icofont-wall-clock"></i> January 04, 2019</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Best Marketing Management Tools</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <Link href="/blog-details">
                                        <a className="post-image">
                                            <img src='/images/blog-img3.jpg' alt="blog-image" />
                                        </a>
                                    </Link>

                                    <div className="blog-post-content">
                                        <ul>
                                            <li><i className="icofont-user-male"></i> <Link href="/blog"><a>Admin</a></Link></li>
                                            <li><i className="icofont-wall-clock"></i> January 26, 2019</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>The Best Marketing Management Tools</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae.</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="icofont-rounded-double-right"></i></a>
                                        </Link>
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

export default Blog;
