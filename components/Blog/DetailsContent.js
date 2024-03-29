import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';

class DetailsContent extends Component {
    
    render() {
        console.log(this.props.post);



        return (
            

            <section id="post" className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                {this.props.post?
                                <>
                                <div className="article-img">
                                    <img src={process.env.NEXT_PUBLIC_URL+this.props.post.attributes.imagen.data.attributes.url} alt="blog-details" />
                                    <div className="date">
                                        {`
                                        ${this.props.post.attributes.fecha.substring(8, 10)}
                                        /
                                        ${this.props.post.attributes.fecha.substring(5, 7)}
                                        `}
                                        <br/>
                                        {this.props.post.attributes.fecha.substring(0, 4)}
                                        </div>
                                </div>
                                
                                <div className="article-content">
                                    
                                        
                                    <h3>{this.props.post.attributes.titulo}</h3>
                                    
                                    {ReactHtmlParser(this.props.post.attributes.cuerpo)}

                                    {/* <div className="share-post">
                                        <ul>
                                            <li><a href="/#"><i className="icofont-facebook"></i></a></li>
                                            <li><a href="/#"><i className="icofont-twitter"></i></a></li>
                                            <li><a href="/#"><i className="icofont-linkedin"></i></a></li>
                                            <li><a href="/#"><i className="icofont-instagram"></i></a></li>
                                            <li><a href="/#"><i className="icofont-vimeo"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                                </>
                                :
                                <>
                                <h1>Post no encontrado</h1>
                                </>

                                }
                                
                            </div>
                            
                            {/* <div className="post-controls-buttons">
                                <div className="controls-left">
                                    <a href="/#"><i className="icofont-double-left"></i> Prev Post</a>
                                </div>

                                <div className="controls-right">
                                    <a href="/#">Next Post <i className="icofont-double-right"></i></a>
                                </div>
                            </div> */}
                            
                            {/* <div className="post-comments">
                                <h3>Comments</h3>
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src='/images/client1.jpg' alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Smith</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="/#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment left-m">
                                    <div className="comment-img">
                                        <img src='/images/client2.jpg' alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Doe John</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="/#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src='/images/client3.jpg' alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>Steven Doe</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="/#">Reply</a>
                                    </div>
                                </div>
                                
                                <div className="single-comment">
                                    <div className="comment-img">
                                        <img src='/images/client4.jpg' alt="client" />
                                    </div>
                                    <div className="comment-content">
                                        <h4>John Cina</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?</p>
                                        <span>Jan 19, 2018 - 9:10AM</span>
                                        <a href="/#">Reply</a>
                                    </div>
                                </div>
                            </div> */}
                            
                            {/* <div className="leave-a-reply">
                                <h3>Leave a Reply</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="E-Mail" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="comment" cols="30" rows="5" className="form-control" placeholder="Your Comment" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="sidebar-area pl-15">
                                {/* <div className="widget widget-search">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="icofont-search-2"></i></button>
                                    </form>
                                </div> */}

                                {/* <div className="widget widget_post_categories">
                                    <h3 className="widget-title">Post Categories</h3>
                                    <div className="bar"></div>

                                    <ul>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> Art</a></li>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> Book</a></li>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> Watch</a></li>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> TV</a></li>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> Gifts</a></li>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> Design</a></li>
                                        <li><a href="/#"><i className="icofont-bubble-right"></i> Smart TV</a></li>
                                    </ul>
                                </div> */}
                                
                                <div className="widget widget_recent_posts">
                                    <h3 className="widget-title">Recent Post</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>

                                    {
                        this.props.recent_posts.map(
                            (item, i, arr) => (
                            <>
                            <li>
                                            <div className="recent-post-thumb">
                                                <a href="/#">
                                                    <img src={process.env.NEXT_PUBLIC_URL+item.attributes.imagen.data.attributes.url} alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3>
                                                <Link href={"/blog/"+item.attributes.seo+"#post"}>
                                                <a>{item.attributes.titulo}</a>
                                            </Link>
                                                    
                                                    </h3>
                                                <span className="date">{item.attributes.fecha}</span>
                                            </div>
                                        </li>
                            </>

                            ))}

                                        {/* <li>
                                            <div className="recent-post-thumb">
                                                <a href="/#">
                                                    <img src='/images/blog-img1.jpg' alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="/#">The Fastest Growing Apps in 2019</a></h3>
                                                <span className="date">23 January 2019</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="/#">
                                                    <img src='/images/blog-img2.jpg' alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="/#">The Most Popular New Business Apps</a></h3>
                                                <span className="date">16 January 2019</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="/#">
                                                    <img src='/images/blog-img3.jpg' alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="/#">3 WooCommerce Plugins to Boost Sales</a></h3>
                                                <span className="date">14 January 2019</span>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="recent-post-thumb">
                                                <a href="/#">
                                                    <img src='/images/blog-img4.jpg' alt="blog-image" />
                                                </a>
                                            </div>

                                            <div className="recent-post-content">
                                                <h3><a href="/#">CakeMail Review – Design Custom Emails</a></h3>
                                                <span className="date">06 January 2019</span>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>

                                {/* <div className="widget widget_tag_cloud">
                                    <h3 className="widget-title">Popular Tags</h3>
                                    <div className="bar"></div>

                                    <div className="tagcloud">
                                        <a href="/#">Art</a>
                                        <a href="/#">Book</a>
                                        <a href="/#">Watch</a>
                                        <a href="/#">TV</a>
                                        <a href="/#">Gifts</a>
                                        <a href="/#">Smart TV</a>
                                        <a href="/#">Design</a>
                                    </div>
                                </div> */}
                                
                                {/* <div className="widget widget_text">
                                    <h3 className="widget-title">Instagram</h3>
                                    <div className="bar"></div>
                                    
                                    <ul>
                                        <li>
                                            <a href="/#">
                                                <img src='/images/work-img1.jpg' alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img src='/images/work-img2.jpg' alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img src='/images/work-img3.jpg' alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img src='/images/work-img4.jpg' alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img src='/images/work-img5.jpg' alt="image" />
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/#">
                                                <img src='/images/work-img6.jpg' alt="image" />
                                            </a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailsContent;
