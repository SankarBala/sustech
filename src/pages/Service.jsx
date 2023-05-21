import React from 'react'
import Banner from './../images/banner.jpeg';

const Service = () => {
  return (
    <div>
      <div className="container my-5">

        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-55">
              <div className="section_main_title py-1 mb-5">
                <h1 className="text-center text-primary">Services We Provide</h1>
                <hr />
              </div>
              <div className="em_bar">
                <div className="em_bar_bg" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="techno_flipbox mb-30">
              <div className="techno_flipbox_font">
                <div className="techno_flipbox_inner">
                  <div className="techno_flipbox_icon">
                    <div className="icon">
                      <i className="flaticon-padlock" />
                    </div>
                  </div>
                  <div className="flipbox_title">
                    <h3>Marketing Strategy</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                </div>
              </div>
              <div className="techno_flipbox_back " style={{ backgroundImage: 'url(assets/images/feature1.jpg)' }}>
                <div className="techno_flipbox_inner">
                  <div className="flipbox_title">
                    <h3>Free Online Course</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                  <div className="flipbox_button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="techno_flipbox mb-30">
              <div className="techno_flipbox_font">
                <div className="techno_flipbox_inner">
                  <div className="techno_flipbox_icon">
                    <div className="icon">
                      <i className="flaticon-intelligent" />
                    </div>
                  </div>
                  <div className="flipbox_title">
                    <h3>Interior Design</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                </div>
              </div>
              <div className="techno_flipbox_back " style={{ backgroundImage: 'url(assets/images/feature2.jpg)' }}>
                <div className="techno_flipbox_inner">
                  <div className="flipbox_title">
                    <h3>Interior Design</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                  <div className="flipbox_button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="techno_flipbox mb-30">
              <div className="techno_flipbox_font">
                <div className="techno_flipbox_inner">
                  <div className="techno_flipbox_icon">
                    <div className="icon">
                      <i className="flaticon-code" />
                    </div>
                  </div>
                  <div className="flipbox_title">
                    <h3>Digital Services</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                </div>
              </div>
              <div className="techno_flipbox_back " style={{ backgroundImage: 'url(assets/images/feature3.jpg)' }}>
                <div className="techno_flipbox_inner">
                  <div className="flipbox_title">
                    <h3>Online Marketing</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                  <div className="flipbox_button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="techno_flipbox mb-30">
              <div className="techno_flipbox_font">
                <div className="techno_flipbox_inner">
                  <div className="techno_flipbox_icon">
                    <div className="icon">
                      <i className="flaticon-content-writing" />
                    </div>
                  </div>
                  <div className="flipbox_title">
                    <h3>Product Selling</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                </div>
              </div>
              <div className="techno_flipbox_back " style={{ backgroundImage: 'url(assets/images/feature3.jpg)' }}>
                <div className="techno_flipbox_inner">
                  <div className="flipbox_title">
                    <h3>Online Product</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                  <div className="flipbox_button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="techno_flipbox mb-30">
              <div className="techno_flipbox_font">
                <div className="techno_flipbox_inner">
                  <div className="techno_flipbox_icon">
                    <div className="icon">
                      <i className="flaticon-bar-chart" />
                    </div>
                  </div>
                  <div className="flipbox_title">
                    <h3>Product Design</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                </div>
              </div>
              <div className="techno_flipbox_back " style={{ backgroundImage: 'url(assets/images/feature1.jpg)' }}>
                <div className="techno_flipbox_inner">
                  <div className="flipbox_title">
                    <h3>24/7 Support</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                  <div className="flipbox_button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-6">
            <div className="techno_flipbox mb-30">
              <div className="techno_flipbox_font">
                <div className="techno_flipbox_inner">
                  <div className="techno_flipbox_icon">
                    <div className="icon">
                      <i className="flaticon-business-and-finance" />
                    </div>
                  </div>
                  <div className="flipbox_title">
                    <h3>Digital Services</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                </div>
              </div>
              <div className="techno_flipbox_back " style={{ backgroundImage: 'url(assets/images/feature2.jpg)' }}>
                <div className="techno_flipbox_inner">
                  <div className="flipbox_title">
                    <h3>Social Marketing</h3>
                  </div>
                  <div className="flipbox_desc">
                    <p>Porem asum molor sit amet, consectetur adipiscing do miusmod tempor.</p>
                  </div>
                  <div className="flipbox_button">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <img src={Banner} alt="Your Image" className="img-fluid my-2" />


      </div>



    </div>
  )
}

export default Service
