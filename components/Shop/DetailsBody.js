import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantityWithNumber } from '../../store/actions/cartActions';
import ImageSlide from './ImageSlide';
import RelatedProducts from './RelatedProducts';
import Description from './Description';
import ReactHtmlParser from 'react-html-parser';

class DetailsBody extends Component {

    state = {
        qty: 1,
        max: 10,
        min: 1,
        sizeGuide: false,
        shipModal: false
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(8, this.state.qty); 
    }

    render() {
        return (
            <section className="shop-details-area ptb-100">
                <div className="container">
                    <div className="shop-details">
                        <div className="row h-100 justify-content-center align-items-center">
                            <ImageSlide 
                            imagenes={this.props.producto.attributes.imagenes.data}
                            />

                            <div className="col-lg-7 col-md-12">
                                <div className="product-entry-summary">
                                    <h3>{this.props.producto.attributes.nombre}</h3>
                                    <h4><span></span> ${this.props.producto.attributes.precio}</h4>

                                    {ReactHtmlParser(this.props.producto.attributes.descripcion)}

                                    <ul className="product-categories">
                                        <li>Categories:</li>
                                        <li><a href="#">Books</a>,</li>
                                        <li><a href="#">Art</a></li>
                                    </ul>

                                    <form onSubmit={this.onFormSubmit}>
                                        <input 
                                            type="number" 
                                            name="quantity" 
                                            title="Qty"
                                            className="form-control" 
                                            value={this.state.qty}
                                            min={this.state.min}
                                            max={this.state.max} 
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            onClick={this.handleAddToCartFromView}
                                        >
                                            Add to Cart
                                        </button>
                                    </form>

                                    {/* <ul className="share-social">
                                        <li>Share:</li>
                                        <li><a href="#" target="_blank"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="icofont-instagram"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>

                        {/* <Description /> */}
                    </div>
                </div>
                
                <RelatedProducts 
                productos={this.props.recent_products}
                />
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DetailsBody)
