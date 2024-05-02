import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClock,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import PreviewButton from "../Buttons/Button2";
import CourseButton from "../Buttons/Button3";
// import InputGroup15 from "../InputGroup";

export default class section1 extends Component {
  render() {
    return (
      <div>
        <div className="section1 container py-5 ">
          <div className="row">
            <div className="col">
              <p className="h1 text-bold">
                Become a Vanilla JavaScript Developer
              </p>
              <div className="py-4 h5 text-secondary">
                In this tutorial, we are going to learn about JavaScript
                (Vanilla JS) - for building incredible, powerful JavaScript
                applications.
              </div>
              <div className="py-3 text-secondary">
                <p>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="pe-2 text-warning"
                  ></FontAwesomeIcon>
                  4 hours
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="pe-2 text-warning"
                  ></FontAwesomeIcon>
                  12 videos
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="pe-2 text-warning"
                  ></FontAwesomeIcon>
                  10,234 Entrolled
                </p>
              </div>
              <PreviewButton>Watch Preview</PreviewButton>
            </div>
            <div className="col ms-5 shadow">
              <div>
                <p className="h2 ps-3">Create Free Account</p>
              </div>
              <div className="buttons">
                <button
                  className="btn btn-outline-secondary ms-5"
                  style={{ width: "120px" }}
                >
                  <FontAwesomeIcon icon={["fab", "google"]} /> Google
                </button>
                <button
                  className="btn btn-outline-secondary ms-5"
                  style={{ width: "120px" }}
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter
                </button>
                <button
                  className="btn btn-outline-secondary ms-5"
                  style={{ width: "120px" }}
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} /> Facebook
                </button>
              </div>

              <div className="input">
                <div>
                  <div class="text-center mt-2 ">
                    <span class="bg-white  mt-2">OR</span>
                  </div>
                </div>
                {/* <InputGroup15></InputGroup15> */}
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-100  py-2 mt-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-100  pe-3 py-2 mt-3"
              />
              <CourseButton>Start Course for Free</CourseButton>
              <hr />
              <div className="ms-3">
                <p>
                  By continuing you accept the Terms of Use, Privacy Policy, and
                  Data Policy
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="h6 py-5">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-warning me-2"
              ></FontAwesomeIcon>
              Shareable Certificate
            </p>
            <p className="h6 py-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-warning me-2"
              ></FontAwesomeIcon>
              Flexible Deadlines
            </p>
            <p className="h6 py-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-warning me-2"
              ></FontAwesomeIcon>
              100% Online Courses
            </p>
            <p className="h6 py-5 ">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-warning me-2"
              ></FontAwesomeIcon>
              Approx.24 hours
            </p>
          </div>
        </div>
      </div>
    );
  }
}
