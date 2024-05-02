import React, { Component } from "react";
import rasm1 from "../../Images/Section2.1.svg";
import rasm2 from "../../Images/Section2.2.svg";
import rasm3 from "../../Images/Section2.3.svg";
import rasm4 from "../../Images/Section2.4.svg";

export default class Section2 extends Component {
  render() {
    return (
      <div>
        <div className="section2 " style={{ background: "#E2E8F0" }}>
          <div className="information py-5 text-center">
            <p className="h5 my-5" style={{ color: "#754FFE" }}>
              Course description
            </p>
            <p className="h1">What will you learn?</p>
            <p className="h6 text-secondary py-2">
              Vanilla JS is a fast, lightweight, cross-platformframework for
              building incredible, powerful JavaScript applications.
            </p>
          </div>

          <div className="row ">
            <div className="col bg-light container ms-5 py-3">
              <div className="header d-flex">
                <div className="image ">
                  <img
                    src={rasm1}
                    alt=""
                    style={{ background: "#754FFE", borderRadius: "50px" }}
                  />
                </div>
                <div className="desc container">
                  <p className="h3">
                    Introduction to
                    <br /> JavaScript{" "}
                    <span
                      className="bg-warning h6 text-white"
                      style={{ borderRadius: "5px" }}
                    >
                      Free
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className="container d-flex">
                <p className="h6 ms-5">Courses 01</p>
                <div className="d-flex text-secondary">
                  <p className="ms-3">6 LESSONS</p>
                  <p className="ms-3">1 HOUR 12 MIN</p>
                </div>
              </div>
              <div className="container">
                <p className="text-secondary">
                  In et tempus dui, in porta dolor. Donec molestie <br />a purus
                  ut interdum. Donec quis felis dignissim, luctus libero ornare
                </p>
                <p className="btn-link btn-link-primary" tabIndex={0}>
                  {" "}
                  View chapter Detailes +{" "}
                </p>
              </div>
            </div>
            <div className="col bg-light ms-5 py-3 me-5">
              <div className="header d-flex">
                <div className="image ">
                  <img
                    src={rasm2}
                    alt=""
                    style={{ background: "#754FFE", borderRadius: "50px" }}
                  />
                </div>
                <div className="desc container">
                  <p className="h3">JavaScript Beginning </p>
                </div>
              </div>
              <div className="container d-flex">
                <p className="h6 ms-5">Courses 01</p>
                <div className="d-flex text-secondary">
                  <p className="ms-3">6 LESSONS</p>
                  <p className="ms-3">1 HOUR 12 MIN</p>
                </div>
              </div>
              <div className="container">
                <p className="text-secondary">
                  In et tempus dui, in porta dolor. Donec molestie <br />a purus
                  ut interdum. Donec quis felis dignissim, luctus libero ornare
                </p>
                <p className="btn-link btn-link-primary" tabIndex={0}>
                  {" "}
                  View chapter Detailes +{" "}
                </p>
              </div>
            </div>
            <div className="row py-5 container">
              <div className="col bg-light container ms-5 py-3">
                <div className="header d-flex">
                  <div className="image ">
                    <img
                      src={rasm3}
                      alt=""
                      style={{ background: "#754FFE", borderRadius: "50px" }}
                    />
                  </div>
                  <div className="desc container">
                    <p className="h3">
                    Variables and Constants
                    </p>
                  </div>
                </div>
                <div className="container d-flex">
                  <p className="h6 ms-5">Courses 01</p>
                  <div className="d-flex text-secondary">
                    <p className="ms-3">6 LESSONS</p>
                    <p className="ms-3">1 HOUR 12 MIN</p>
                  </div>
                </div>
                <div className="container">
                  <p className="text-secondary">
                    In et tempus dui, in porta dolor. Donec molestie <br />a
                    purus ut interdum. Donec quis felis dignissim, luctus libero
                    ornare
                  </p>
                  <p className="btn-link btn-link-primary" tabIndex={0}>
                    {" "}
                    View chapter Detailes +{" "}
                  </p>
                </div>
              </div>
              <div className="col bg-light ms-5 py-3 me-4">
                <div className="header d-flex">
                  <div className="image ">
                    <img
                      src={rasm4}
                      alt=""
                      style={{ background: "#754FFE", borderRadius: "50px" }}
                    />
                  </div>
                  <div className="desc container">
                    <p className="h3">Types and Operators</p>
                  </div>
                </div>
                <div className="container d-flex">
                  <p className="h6 ms-5">Courses 01</p>
                  <div className="d-flex text-secondary">
                    <p className="ms-3">6 LESSONS</p>
                    <p className="ms-3">1 HOUR 12 MIN</p>
                  </div>
                </div>
                <div className="container">
                  <p className="text-secondary">
                    In et tempus dui, in porta dolor. Donec molestie <br />a
                    purus ut interdum. Donec quis felis dignissim, luctus libero
                    ornare
                  </p>
                  <p className="btn-link btn-link-primary" tabIndex={0}>
                    {" "}
                    View chapter Detailes +{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
