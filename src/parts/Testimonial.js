import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import Star from "elements/Star";

import "assets/scss/style.scss";

export default function Testimonial(props) {
  return (
    <Fade bottom>
      <section className="container testimonial p-4 mt-5">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 mx-auto mx-md-0">
            <div className="img-wrapper">
              <img
                src={`${process.env.REACT_APP_HOST}/${props.data.imageUrl}`}
                alt={props.data.name}
                className="img-cover"
              />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6 text-secondary mt-4 mt-md-0 text-center text-md-left position-relative">
            <h1 className="h5 font-weight-bold mb-0">{props.data.name}</h1>
            <Star
              value={props.data.rate}
              width={50}
              height={50}
              spacing={5}
              className="mt-0"
            />
            <div className="font-weight-light testimonial-data mt-5">
              <p
                className="h3"
                style={{ lineHeight: 1.5 }}
              >{`"${props.data.content}"`}</p>
              <p>
                {props.data.familyName}, {props.data.familyOccupation}
              </p>
            </div>
            <Button className="btn" isPrimary hasShadow>
              Read Story
            </Button>
          </div>
        </div>
      </section>
    </Fade>
  );
}
