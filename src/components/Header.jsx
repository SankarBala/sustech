import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../images/logo.png';

function Header() {
    return (
        <header>
            <div className="content">
                <div className="primary-menu">
                    <div className="column col-left">
                        <a href="tel:01993-761712">
                            <span><i className="fas fa-phone" />04 347 5767</span>
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
                        <img src={Logo} alt="logo" height="70px" />
                    </div>
                    <div className="menu-btn" />
                    <div className="column col-right menu py-4 text-info">

                        <NavLink to="/" className="">Home</NavLink>
                        <NavLink to="/service" className="">Service</NavLink>
                        <NavLink to="/contact" className="">Contact</NavLink>
                        <NavLink to="/about" className="">About</NavLink>

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
