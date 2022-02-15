import React from "react";
import propTypes from "prop-types";

import Button from "../elements/Button";
import IconText from "./IconText";
import "../assets/scss/style.scss";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return window.location.pathname === path ? "active" : "";
  };

  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-light">
            <Button
              className="brand-text-icon font-weight-bold text-primary mx-auto"
              href=""
              type="link"
            >
              Santuy
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <IconText />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Button
                  className={`nav-link ${getNavLinkClass("/booking")}`}
                  type="link"
                  href="/booking"
                >
                  Booking
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className={`nav-link ${getNavLinkClass("/facilities")}`}
                  type="link"
                  href="/facilities"
                >
                  Facilities
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className={`nav-link ${getNavLinkClass("/reviews")}`}
                  type="link"
                  href="/reviews"
                >
                  Reviews
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className={`nav-link ${getNavLinkClass("/blogs")}`}
                  type="link"
                  href="/blogs"
                >
                  Blogs
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  className="btn text-white px-3"
                  type="link"
                  href="/sign-in"
                  isPrimary
                  isBlock
                >
                  Sign In
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

Header.prototype = {
  isCentered: propTypes.bool,
};
