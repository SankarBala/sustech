import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="content">
                    <div className="about-us">
                        <h3 className="footer-h3">ABOUT US</h3>
                        <p>Mauris mattis auctor cursus. Phasellus tellus tellus imperdiet ut.Mauris mattis auctor cursus.
                            Phasellus tellus tellus , imperdiet eu</p>
                        <div className="icon">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus-g" /></a>
                        </div>
                    </div>
                    <div className="contact-us">
                        <h3 className="footer-h3">CONTACT US</h3>
                        <div className="contacts">
                            <i className="fas fa-home" />
                            <span>Raffles avenue,Singapore <br /> Flyer,Singapore</span>
                        </div>
                        <div className="contacts">
                            <i className="fas fa-phone-alt" style={{ fontSize: 23 }} />
                            <span>+(98) 888 7777 <br /> +(12) 999 22333</span>
                        </div>
                        <div className="contacts">
                            <i className="fas fa-envelope" />
                            <span style={{ fontSize: 12 }}>Sample-email@example.com<br /> myinfo@gmail.com</span>
                        </div>
                    </div>
                    <div className="useful-links">
                        <h3 className="footer-h3">USEFUL LINKS</h3>
                        <ul>
                            <li><i className="fas fa-chevron-right" />Home</li>
                            <li><i className="fas fa-chevron-right" />Services</li>
                            <li><i className="fas fa-chevron-right" />About us</li>
                        </ul>
                    </div>
                    <div className="recent-post">
                        <h3 className="footer-h3">REcent post</h3>
                        <div className="info">
                            <h3>07 <br /> march <br /> 2021</h3>
                            <h2>WHERE WE'RE STANDING RIGHT NOW</h2>
                            <span><i className="fas fa-user" />By Admin</span><span><i className="fas fa-comments" />28</span>
                        </div>
                        <div className="info">
                            <h3>07 <br /> march <br /> 2021</h3>
                            <h2>WHERE WE'RE STANDING RIGHT NOW</h2>
                            <span><i className="fas fa-user" />By Admin</span><span><i className="fas fa-comments" />28</span>
                        </div>
                    </div>
                </div>
                <a href="#" className="to-top">
                    <i className="fas fa-arrow-up" />
                </a>
                <div className="copyright">
                    <div className="col-left">
                        <h3>Copyright 2019.info All rights reserved.</h3>
                    </div>
                    <div className="col-right">
                        <a href="#">FAQS</a>
                        <a href="#">PRIVACY</a>
                        <a href="#">POLICY</a>
                        <a href="#">SUPPORTS</a>
                    </div>
                </div>
            </footer>

            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container p-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
                        {/* Twitter */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
                        {/* Google */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
                        {/* Instagram */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
                        {/* Linkedin */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
                        {/* Github */}
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Form */}
                    <section className>
                        <form action>
                            {/*Grid row*/}
                            <div className="row d-flex justify-content-center">
                                {/*Grid column*/}
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-5 col-12">
                                    {/* Email input */}
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example24" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example24" style={{ marginLeft: 0 }}>Email address</label>
                                        <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '88.8px' }} /><div className="form-notch-trailing" /></div></div>
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-auto">
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                        </form>
                    </section>
                    {/* Section: Form */}
                    {/* Section: Text */}
                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
                            harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    {/* Section: Text */}
                    {/* Section: Links */}
                    <section className>
                        {/*Grid row*/}
                        <div className="row">
                            {/*Grid column*/}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright: 
                    <a className="text-white" href="https://mdbootstrap.com/">  yoursite.com</a>
                </div>
            </footer>



        </>

    )
}

export default Footer
