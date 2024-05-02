import React, { Component } from 'react'
import rasm12 from "../../Images/Section3.2.png"
import rasm13 from "../../Images/Section4.2.jpg"

export default class Section4 extends Component {
  render() {
    return (
      <div>
        <div className="Section4 py-5" style={{ background: "#F1F9F9" }}>
        <div className="py-5 text-center">
          <p className="h6" style={{ color: "#754FFE" }}>
            TESTIMONIALS
          </p>
          <p className="h1">What our learners are saying</p>
          <p className="text-secondary h5">
            12+ million people are already learning on Geeks
          </p>
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col bg-white ms-3 me-3">
              <div className="text-center">
                <p className="h1 text-secondary">"</p>
                <p className="h4">
                  The generated lorem Ipsum is therefore always free from
                  repetition, injected humour, or words etc generate lorem Ipsum
                  which looks racteristic reasonable.
                </p>
              </div>
              <div className="cardfooter">
                <div className="text-center">
                  <img
                    src={rasm12}
                    alt=""
                    style={{ width: "60px", borderStyle: "10px blue" }}
                  />
                </div>
                <div
                  className="text-center text-white"
                  style={{ background: "#754FFE", marginTop: "-30px" }}
                >
                  <div className="py-3">
                    <p className="h3 mt-3">Barry Watson Web</p>
                    <p className="h6">Developer,UK</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col bg-white ms-3 me-3">
              <div className="text-center">
                <p className="h1 text-secondary">"</p>
                <p className="h4">
                  The generated lorem Ipsum is therefore always free from
                  repetition, injected humour, or words etc generate lorem Ipsum
                  which looks racteristic reasonable.
                </p>
              </div>
              <div className="cardfooter">
                <div className="text-center">
                  <img
                    src={rasm13}
                    alt=""
                    style={{ width: "60px", borderStyle: "10px blue", borderRadius:"50px" }}
                  />
                </div>
                <div
                  className="text-center text-white"
                  style={{ background: "#754FFE", marginTop: "-30px" }}
                >
                  <div className="py-3">
                    <p className="h3 mt-3">Barry Watson Web</p>
                    <p className="h6">Developer,UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
