import React from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../../utils/ActiveLink';
import SideDrawer from './SideDrawer';
import SearchForm from './SearchForm';

class Navbar extends React.Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { pathname } = this.props.router;
        let { products } = this.props;

        let layOutCls = '';

        let logo = process.env.NEXT_PUBLIC_URL+this.props.logo.imagen.data.attributes.url;
        if (pathname == '/digital-marketing'){
            layOutCls = 'marketing-navbar';
            logo = process.env.NEXT_PUBLIC_URL+this.props.logo.imagen.data.attributes.url;
        }

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        return (
            <>
                <header id="header">
                    <div id="navbar" className={`crake-nav ${layOutCls}`}>
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/saas">
                                    <a className="navbar-brand">
                                        <img src={logo} alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav nav ms-auto">
                                        <li className="nav-item">
                                        <Link activeClassName="active" href="/#banner">
                                                        <a>Home</a>
                                                    </Link>
                                            
                                            <ul className="dropdown_menu">
                                            <li>
                                                    <Link activeClassName="active" href="/#banner">
                                                        <a>Revere Coffee</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link activeClassName="active" href="/#brew-bags-revere">
                                                        <a>Brew Bags Revere</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/#sostenibilidad">
                                                        <a>Contribuimos a</a>
                                                    </Link>
                                                </li>
                                                
                                                <li>
                                                    <Link activeClassName="active" href="/#diez-razones">
                                                        <a>Diez Razones para Elegirnos</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/#founder">
                                                        <a>Founder</a>
                                                    </Link>
                                                </li>
                                                
                                                <li>
                                                    <Link activeClassName="active" href="/#gallery">
                                                        <a>Gallery</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/#products">
                                                        <a>Products</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/#about-revere">
                                                        <a>About Revere</a>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link activeClassName="active" href="/#experiences">
                                                        <a>Experiences</a>
                                                    </Link>
                                                </li>

                                                
                                            </ul>
                                        </li>
                                        

                                        <li className="nav-item">
                                        <Link activeClassName="active" href="/#about-revere">
                                                        <a>About Revere</a>
                                                    </Link>
                                            
                                        </li>
                                        

                                        <li className="nav-item">
                                            <Link activeClassName="active" href="/contact#main">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="ms-auto others-option">
                                    <ul className="navbar-nav">
                                        <li className="nav-item cart-wrapper">
                                            <Link activeClassName="active" href="/cart">
                                                <a>
                                                    <i className="icofont-shopping-cart cart-icon"></i>

                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="header-search-box">
                                            <Link activeClassName="active" href="/#">
                                                <a 
                                                    onClick={e => {e.preventDefault();this.handleSearchForm();}}
                                                    title="Search"
                                                >
                                                    <i className="icofont-search-2"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        
                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div> 
                    </div>
                </header>

                {this.state.drawer ? <SideDrawer onClick={this.handleDrawer} /> : ''}
                {this.state.searchForm ? <SearchForm onClick={this.handleSearchForm} /> : ''}
            </>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))
