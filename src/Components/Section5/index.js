import React, { Component } from 'react'
import QuestionButton from "../../Components/Buttons/Button4";

export default class Section5 extends Component {
  render() {
    return (
      <div>
        <div className="section5 py-5">
        <div className="text-center">
          <p className="h6" style={{ color: "#754FFE" }}>
            NEED TO KNOW
          </p>
          <p className="h1">Frequently Asked Questions.</p>
          <p className="text-secondary h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
            non <br /> accumsan in, tempor dictum neque.
          </p>
          <div className="py-5">
            <div>
              <p className="h5 py-3">What is the cost of Online courses  <span className="ms-5">+</span> </p>
            </div>
            <div>
              <p className="h5 py-3">What do I need to take a course  <span className="ms-5">+</span> </p>
            </div>
            <div>
              <p className="h5 py-3">What do I recieve for taking this course  <span className="ms-5">+</span> </p>
            </div>
            <div>
              <p className="h5 py-3">What will if i get subscribe for this course <span className="ms-5">+</span> </p>
            </div>
            <QuestionButton className="h6">More question? Visit the Learner Help Center</QuestionButton>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
