import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Login/Banner';
import LoginBody from '../components/Login/LoginBody';

class Login extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <LoginBody />
                
                <Footer />
            </>
        );
    }
}

export default Login;
