import React, {useState} from "react";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";

import Button from "../elements/Button";
import IconText from "./IconText";
import "../assets/scss/style.scss";


export default function Header(props) {
  const getNavLinkClass = (path) => {
    return window.location.pathname === path ? "active" : "";
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);



  if (props.isCentered) {
    return (
      <Fade>
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
      </Fade>
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
            aria-expanded={!isNavCollapsed ? true : false} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : 'collapse show'} navbar-collapse`} id="navbarNav">
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
