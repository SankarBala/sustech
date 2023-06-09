import React, { useEffect, useState } from "react";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <footer>
            <div className="content">
                <div className="about-us">
                    <h3 className="footer-h3">ABOUT US</h3>
                    <p> Your trusted partner for all your construction needs.</p>
                    <div className="icon">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/profile.php?id=100092655250914&mibextid=ZbWKwL"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="/">
                            <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="/">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="/">
                            <i className="fab fa-google-plus-g" />
                        </a>
                    </div>
                </div>
                <div className="contact-us">
                    <h3 className="footer-h3">CONTACT US</h3>
                    <div className="contacts">
                        <i className="fas fa-home" />
                        <span>
                            Eternity Hub Building <br />
                            Murar Jadeed 1 Bus Stop <br />
                            Omar Bin Al Khattab, Dubai <br />
                            Near-Al Khaleej St <br />
                        </span>
                    </div>
                    <div className="contacts">
                        <i className="fas fa-phone-alt mr-3" />
                        <span>
                            052-6147976
                            <br />
                            054-7457121
                        </span>
                    </div>
                    <div className="contacts">
                        <i className="fas fa-envelope" />
                        <span style={{ fontSize: 12 }}>
                            info@msasts.com
                            <br />
                            shif2066@gmail.com
                        </span>
                    </div>
                </div>
                <div className="recent-post">
                    <h3 className="footer-h3">LOCATION</h3>
                    <div className="info">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.880371990359!2d55.31221302820403!3d25.27863270112727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e2ea2a101b%3A0x8370eb4124a21fab!2sEternity%20Hub!5e0!3m2!1sen!2sbd!4v1684563676002!5m2!1sen!2sbd"
                            width="100%"
                            height={240}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location"
                        />
                    </div>
                </div>
            </div>

            <button
                onClick={() => scrollToTop()}
                style={{ display: isVisible ? "flex" : "none" }}
                className="to-top cursor-pointer"
            >
                <i className="fas fa-arrow-up" />
            </button>

            <div className="copyright">
                <div className="col-left">
                    <h3>&copy; {new Date().getFullYear()} | All right reserved.</h3>
                </div>
                <div className="col-right">
                    <span className="text-white">
                        Developed by :
                        <a
                            className="text-info"
                            target="_blank"
                            href="https://sankarbala.github.io/"
                            rel="noreferrer"
                        >
                            Sankar Bala
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
