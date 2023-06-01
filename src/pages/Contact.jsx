import React, { useState } from "react";
import BestProject from "./../images/house2.jpg";
import { api } from "./../config.js";

const Contact = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    response: "",
  });

  const handleInput = (action) => {
    setQuery({
      ...query,
      response: "",
      [action.target.name]: action.target.value,
    });
  };

  const submitForm = () => {
    fetch(`${api}/queries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        setQuery({
          ...query,
          name: "",
          email: "",
          phone: "",
          message: "",
          response: data.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-contact100 my-3">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">SEND US A MESSAGE</span>
            <label className="label-input100" htmlFor="first-name">
              Enter your name
            </label>
            <div
              className="wrap-input100 validate-input"
              data-validate="Type your name"
            >
              <input
                id="name"
                className="input100"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(value) => handleInput(value)}
                value={query.name}
              />
              <span className="focus-input100" />
            </div>

            <label className="label-input100" htmlFor="email">
              Enter your email
            </label>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                id="email"
                className="input100"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                onChange={(value) => handleInput(value)}
                value={query.email}
              />
              <span className="focus-input100" />
            </div>

            <label className="label-input100" htmlFor="phone">
              Enter phone number
            </label>
            <div className="wrap-input100">
              <input
                id="phone"
                className="input100"
                type="text"
                name="phone"
                placeholder="Eg. +1 800 000000"
                onChange={(value) => handleInput(value)}
                value={query.phone}
              />
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="message">
              Message *
            </label>
            <div
              className="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <textarea
                id="message"
                className="input100"
                name="message"
                placeholder="Write us a message"
                onChange={(value) => handleInput(value)}
                value={query.message}
              />
              <span className="focus-input100" />
            </div>
            <p>{query.response}</p>
            <div className="container-contact100-form-btn">
              <button
                className="contact100-form-btn"
                type="button"
                onClick={submitForm}
              >
                Send Message
              </button>
            </div>
          </form>
          <div
            className="contact100-more flex-col-c-m"
            style={{ backgroundImage: `url(${BestProject})` }}
          >
            <div className="contact-us text-info p-5 m-5">
              <h3 className="footer-h3">CONTACT US</h3>

              <div className="contacts">
                <i className="fas fa-phone-alt mr-3" />
                <span>
                  052-6147976
                  <br />
                  054-7457121
                </span>
              </div>
              <hr />
              <div className="contacts">
                <i className="fas fa-envelope" />
                <span style={{ fontSize: 12 }}>
                info@msasts.com
                  <br />
                  shif2066@gmail.com
                </span>
              </div>

              <hr />
              <div className="contacts">
                <i className="fas fa-home" />
                <span>
                  Eternity Hub Building <br />
                  Murar Jadeed 1 Bus Stop <br />
                  Omar Bin Al Khattab, Dubai <br />
                  Near-Al Khaleej St <br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
