import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import "assets/scss/style.scss";

export default function Recommended(props) {
  return (
    <section
      className="container recommended p-4 mt-5"
      ref={props.refRecommended}
    >
        <h1 className="h1 font-weight-bold text-secondary text-lg-left text-center mb-4">
          Recommended Rooms
        </h1>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                className={`item column-4 ${
                  index === 0 ? "row-2" : "row-1"
                } d-none d-lg-block`}
                key={index}
              >
                <Fade bottom delay={300*index}>
                  <div className="card card-featured">
                    <div className="tag">
                      <span className="font-weight-bold">${item.price}</span>{" "}
                      <span>per-night</span>
                    </div>
                    <figure className="img-wrapper m-0">
                      <img
                        src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ""}
                        className="img-cover"
                        alt={item.title}
                      />
                    </figure>
                    <div className="card-body text-white p-3">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white text-decoration-none"
                        href={`/properties/${item._id}`}
                      >
                        <h4 className="card-title mb-0">{item.title}</h4>
                        <p className="card-text font-weight-light">
                          {item.city}, {item.country}
                        </p>
                      </Button>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
        <div className="row">
          {props.data.map((item, index) => {
            return (
              <div className={`item col-sm-6 d-block d-lg-none my-2`} key={index}>
                <Fade bottom delay={300*index}>
                  <div className="card card-featured">
                    <div className="tag">
                      <span className="font-weight-bold">${item.price}</span>{" "}
                      <span>per-night</span>
                    </div>
                    <figure className="img-wrapper m-0">
                      <img
                        src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}` : ""}
                        className="img-cover"
                        alt={item.title}
                      />
                    </figure>
                    <div className="card-body text-white p-3">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white text-decoration-none"
                        href={`/properties/${item._id}`}
                      >
                        <h4 className="card-title mb-0">{item.title}</h4>
                        <p className="card-text font-weight-light">
                          {item.city}, {item.country}
                        </p>
                      </Button>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
    </section>
  );
}
