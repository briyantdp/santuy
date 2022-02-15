import React from "react";
import "elements/Star/index.scss";

import propTypes from "prop-types";

export default function Star({ className, value, width, height, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starwithDecimals`}
        style={{ left: leftPos, width: decimals * width - spacing }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`star-placeholder-${index}`}
        style={{
          left: index * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <div className={["stars", className].join(" ")}>
      {starPlaceholder}
      {star}
    </div>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
