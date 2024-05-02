import React, { Component } from "react";
import StyledButton from "../Buttons/Button1";
import logo from "../../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header23 d-flex justify-content-between ms-3 me-2">
          <header className="py-5 d-flex">
            <div className="img py-3">
              <img src={logo} alt="" />
            </div>
            <div className="btn-group">
              <StyledButton
                className="btn dropdown-toggle ms-3"
                type="button"
                id="defaultDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Browse{" "}
              </StyledButton>
              <StyledButton
                className="btn dropdown-toggle ms-3"
                type="button"
                id="defaultDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Landing{" "}
              </StyledButton>
              <StyledButton
                className="btn dropdown-toggle ms-3"
                type="button"
                id="defaultDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Pages{" "}
              </StyledButton>
              <StyledButton
                className="btn dropdown-toggle ms-3"
                type="button"
                id="defaultDropdown"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Accounts{" "}
              </StyledButton>
            </div>
            <div className="inputGroup py-3">
              <input type="text" placeholder="Search courses" />
              <FontAwesomeIcon icon={faSearch} className="me-5" />
            </div>
          </header>
          <div className="header2 py-5">
            <button className="btn me-3 shadow">Sign in</button>
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    );
  }
}
