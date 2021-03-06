import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Portfolio/Banner';
import ContentTwo from '../components/Portfolio/ContentTwo';

class PortfolioTwo extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <ContentTwo />
                
                <Footer />
            </>
        );
    }
}

export default PortfolioTwo;
