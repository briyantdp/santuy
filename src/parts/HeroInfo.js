import React from "react";

import IconTravelers from "../assets/icons/icon-travelers.svg";
import IconCities from "../assets/icons/icon-cities.svg";
import IconSpots from "../assets/icons/icon-spots.svg";

import formatNumber from "../utils/formatNumber";

import "../assets/scss/style.scss";
export default function HeroInfo(props) {
  return (
    <section className="container hero-info-container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row hero-info p-2 text-primary">
            <div className="col-3 offset-1 hero-info-item ">
              <img src={IconTravelers} alt="Travelers" />
              <p className="mt-1">{`${formatNumber(
                props.data.travelers
              )} Travelers`}</p>
            </div>
            <div className="col-3 offset-1 hero-info-item">
              <img src={IconCities} alt="Cities" />
              <p className="mt-1">{`${formatNumber(
                props.data.cities
              )} Travelers`}</p>
            </div>
            <div className="col-3 offset-1 hero-info-item">
              <img src={IconSpots} alt="Spots" />
              <p className="mt-1">{`${formatNumber(
                props.data.spots
              )} Travelers`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
