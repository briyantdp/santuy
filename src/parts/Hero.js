import React from "react";
import Fade from "react-reveal/Fade";

import Button from "../elements/Button";

import "../assets/scss/style.scss";

export default function Hero(props) {
  function showRecommended() {
    window.scrollTo({
      top: props.refRecommended.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom delay={300}>
      <section className="container hero p-4 mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-9 text-center text-md-left">
            <h1 className="h1 text-secondary font-weight-bold">
              Forget the work, <br />
              and get your holiday
            </h1>
            <p className="text-secondary">
              We provide you to choose your favourite room which have big range of
              top-rated properties also have a price guarantee. What are you think
              ?
            </p>
            <div
              className="btn-group mx-auto mx-lg-0"
              role="group"
              aria-label="Basic example"
            >
              <Button
                className="btn btn-light text-primary px-3 mr-2 rounded"
                onClick={showRecommended}
              >
                Show Me Now
              </Button>
              <Button className="btn text-white px-3 rounded" isPrimary>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
