import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../images/logo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="content">
                <div className="primary-menu">
                    <div className="column col-left">
                        <a href="tel:01993-761712">
                            <span>
                                <i className="fas fa-phone" />
                                04 347 5767
                            </span>
                        </a>
                        <span>
                            <i className="fas fa-envelope" />
                            Email: shif2066@gmail.com
                        </span>
                    </div>
                    <div className="column col-right">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100092655250914&mibextid=ZbWKwL"
                        >
                            <i className="fab fa-facebook" />
                        </a>
                        <a rel="noreferrer" target="_blank" href="/">
                            <i className="fab fa-twitter" />
                        </a>
                        <a rel="noreferrer" target="_blank" href="/">
                            <i className="fab fa-linkedin" />
                        </a>
                    </div>
                </div>
                <div className="main-header">
                    <div className="column col-left">
                        <Link to="/">
                            <img src={Logo} alt="logo" height="55px" />
                        </Link>
                    </div>
                    <div
                        ref={dropdownRef}
                        className={`menu-btn ${isOpen ? "active" : ""}`}
                        onClick={toggleDropdown}
                    />
                    <div
                        className={`column col-right menu text-info ${isOpen ? "active" : ""
                            }`}
                    >
                        <NavLink to="/" exact className="">
                            Home
                        </NavLink>
                        <NavLink to="/service" className="">
                            Service
                        </NavLink>
                        <NavLink to="/about" className="">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="">
                            Contact
                        </NavLink>

                        {/* <form
                         ref={search}
                         action="#" className="search-box">
                            <input type="text" placeholder="search" />
                            <button className="search-btn" type="button" name="button">
                                <i className="fas fa-search" />
                            </button>
                        </form> */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
