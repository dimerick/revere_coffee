import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Shop/BannerTwo';
import DetailsBody from '../components/Shop/DetailsBody';

class ShopOne extends Component {
    render() {
        return (
            <>
                <Navbar />

                <BannerTwo />

                <DetailsBody />
                
                <Footer />
            </>
        );
    }
}

export default ShopOne;