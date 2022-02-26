import React from "react";
import Fade from 'react-reveal';

import Button from "../elements/Button";

import "../assets/scss/style.scss";
import ChooseUsIcon1 from "../assets/icons/chooseus_icon1.svg";
import ChooseUsIcon2 from "../assets/icons/chooseus_icon2.svg";
import ChooseUsIcon3 from "../assets/icons/chooseus_icon3.svg";
import ChooseUsIcon4 from "../assets/icons/chooseus_icon4.svg";

export default function ChooseUs(props) {
  return (
    <Fade bottom delay={500}>
      <section className="container choose-us p-4 mt-5">
        <div className="row align-items-center">
          <div className="col-lg-4 text-secondary text-lg-left text-center">
            <h1 className="h1 text-secondary font-weight-bold">Why Santuy ?</h1>
            <p>
              Find and order your many booking list in your favourite spot with
              our affordable price.
            </p>
            <Button className="btn text-white px-3 rounded" isPrimary hasShadow>
              Explore Now
            </Button>
          </div>
          <div className="col-lg-8 text-lg-left text-center mt-lg-0 mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="card p-4">
                  <div
                    className="card-img-container bg-info rounded d-flex justify-content-center align-items-center mx-lg-0 mx-auto"
                    style={{ width: 80, height: 80 }}
                  >
                    <img
                      className="card-img-top"
                      src={ChooseUsIcon1}
                      alt="Choose 1"
                      style={{ width: 40, height: 40 }}
                    />
                  </div>
                  <div className="card-body text-secondary px-0">
                    <h4 className="card-title font-weight-bold">
                      Easy & Safe Order
                    </h4>
                    <p className="card-text">
                      Find and order your many booking list with easily and safely
                      on our platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-4">
                  <div
                    className="card-img-container bg-info rounded d-flex justify-content-center align-items-center mx-lg-0 mx-auto"
                    style={{ width: 80, height: 80 }}
                  >
                    <img
                      className="card-img-top"
                      src={ChooseUsIcon2}
                      alt="Choose 1"
                      style={{ width: 40, height: 40 }}
                    />
                  </div>
                  <div className="card-body text-secondary px-0">
                    <h4 className="card-title font-weight-bold">
                      Trusted Partnerships
                    </h4>
                    <p className="card-text">
                      More than 10+ partners who work with Santuy for better
                      business, one of which is a big startup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card p-4">
                  <div
                    className="card-img-container bg-info rounded d-flex justify-content-center align-items-center mx-lg-0 mx-auto"
                    style={{ width: 80, height: 80 }}
                  >
                    <img
                      className="card-img-top"
                      src={ChooseUsIcon3}
                      alt="Choose 1"
                      style={{ width: 40, height: 40 }}
                    />
                  </div>
                  <div className="card-body text-secondary px-0">
                    <h4 className="card-title font-weight-bold">
                      An Affordable Price
                    </h4>
                    <p className="card-text">
                      We understand that our client has constrained about price
                      when they want to book property with less costs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-4">
                  <div
                    className="card-img-container bg-info rounded d-flex justify-content-center align-items-center mx-lg-0 mx-auto"
                    style={{ width: 80, height: 80 }}
                  >
                    <img
                      className="card-img-top"
                      src={ChooseUsIcon4}
                      alt="Choose 1"
                      style={{ width: 40, height: 40 }}
                    />
                  </div>
                  <div className="card-body text-secondary px-0">
                    <h4 className="card-title font-weight-bold">
                      Close to Favourite Spots
                    </h4>
                    <p className="card-text">
                      You can reach your holiday with your family happily with our
                      this benefit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
