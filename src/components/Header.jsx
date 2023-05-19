import React from 'react';
import Logo from './../images/logo.jpg';

function Header() {
    return (
        <header>
            <div className="content bg-primary">
                <div className="primary-menu">
                    <div className="column col-left">
                        <a href="tel:01993-761712">
                            <span><i className="fas fa-phone" />01993-761712</span>
                        </a>
                        <span><i className="fas fa-envelope" />Email: mdshifuddin@yahoo.com</span>
                    </div>
                    <div className="column col-right">
                        <a href="#"><i className="fab fa-facebook" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-linkedin" /></a>
                    </div>
                </div>
                <div className="main-header">
                    <div className="column col-left">
                        <img src={Logo} alt="logo" height="100px" />
                    </div>
                    <div className="menu-btn" />
                    <div className="column col-right menu py-5 text-info">
                        <a href="#" className="">Home</a>
                        <a href="#" className="">Service</a>
                        <a href="#" className="">Prices</a>
                        <a href="#" className="">Contact Us</a>
                        <a href="#" className="">About Us</a>
                        <form action="#" className="search-box">
                            <input type="text" placeholder="search" />
                            <button className="search-btn" type="button" name="button">
                                <i className="fas fa-search" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
