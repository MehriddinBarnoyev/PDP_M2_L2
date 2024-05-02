import React, { Component } from "react";
import img1 from "../../Images/Section3.2.png";
import imgF1 from "../../Images/SectionF1.svg";
import imgF2 from "../../Images/SectionF2.svg";
import imgF3 from "../../Images/SectionF3.svg";
import imgF4 from "../../Images/SectionF4.svg";
import imgF5 from "../../Images/SectionF5.svg";
import imgF6 from "../../Images/SectionF6.svg";

export default class Section3 extends Component {
  render() {
    return (
      <div>
        <div className="section3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className=" h6 ms-5 py-5" style={{ color: "#754FFE" }}>
                  YOUR INSTRUCTOR
                </p>
                <div className="h1">
                  <p>
                    Hi I am{" "}
                    <span style={{ color: "#754FFE" }}>James Davies</span> I
                    will be taking you through lessons.
                  </p>
                </div>
                <p className="text-secondary h5">
                  Create beautiful website with this Geeks UI <br />
                  template. Get started building a site today.
                </p>
                <hr className="py-3" />
                <div className="d-flex justify-content-between">
                  <div>
                    <h1>45</h1>
                    <p className="text-secondary">Lessons</p>
                  </div>
                  <div>
                    <h1>10,500+</h1>
                    <p className="text-secondary">Students</p>
                  </div>
                  <div>
                    <h1>12+</h1>
                    <p className="text-secondary">Hours</p>
                  </div>
                </div>
              </div>
              <div className="col container ms-3">
                <div className="imgage ms-3">
                  <img src={img1} alt="Nimadir" className="ms-5 py-5" />
                </div>
              </div>
            </div>
            <div className="SectionF py-5">
              <p className="py-5 text-center" style={{ color: "#754FFE" }}>
                TRUSTED BY TOP-TIER PRODUCT COMPANIES
              </p>
              <div className="imagesT justify-content-between ">
                <div className="row">
                  <div className="col">
                    <img src={imgF1} alt="" />
                  </div>
                  <div className="col">
                    <img src={imgF2} alt="" />
                  </div>
                  <div className="col">
                    <img src={imgF3} alt="" />
                  </div>
                  <div className="col">
                    <img src={imgF4} alt="" />
                  </div>
                  <div className="col">
                    <img src={imgF5} alt="" />
                  </div>
                  <div className="col">
                    <img src={imgF6} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
