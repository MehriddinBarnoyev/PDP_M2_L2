import React, { Component } from "react";
import logo from "../../Images/logo.svg";
import rasm1 from "../../Images/Footer1.svg"
import rasm2 from "../../Images/Footer2.svg"


export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex py-5">
          <div className="col">
            <img src={logo} alt="" />
            <p className="py-3 text-secondary">
              Geek is feature-rich components and beautifully Bootstrap UIKit
              for developers, built with bootstrap responsive framework.
            </p>
          </div>
          <div className="col ">
            <p className="h5 text-c ms-5">Company</p>
            <div className="text-secondary ms-5">
            <p>About us</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact</p>
            </div>
          </div>
          <div className="col">
            <p className="h5">Support</p>
            <div className="text-secondary">
                <p>Help adn support</p>
                <p>Become instructor</p>
                <p>Get the app</p>
                <p>FAQ's</p>
                <p>Tutorial</p>
            </div>
          </div>
          <div className="col">
            <p className="h5">Get in touch</p>
            <p className="py-2 text-secondary">339 McDermott Points Hettingerhaven, NV 15283</p>
            <p className="h6">Email: support@geeksui.com</p>
            <p>Phone: (000) 123 456 789</p>
            <div className="row d-flex">
                <img src={rasm1} alt=""  style={{width:"150px"}}/>
                <img src={rasm2} alt="" style={{width:"150px"}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
