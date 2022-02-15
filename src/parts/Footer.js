import React from "react";
import IconText from "parts/IconText";

import Button from "elements/Button";

export default function Footer() {
  return (
    <footer className="container p-4 mt-5">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <IconText />
          <p className="mt-2 text-primary">
            We can make a great and memorable experience for your holiday.
          </p>
        </div>
        <div className="col-lg-3">
          <h1 className="h5 text-primary font-weight-bold">For Beginners</h1>
          <ul className="list-unstyled mt-3">
            <li>
              <Button type="link" href="/sign-up">
                New Account
              </Button>
            </li>
            <li>
              <Button type="link" href="/booking">
                Booking a Room
              </Button>
            </li>
            <li>
              <Button type="link" href="/payment">
                Payment
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h1 className="h5 text-primary font-weight-bold">Explore Us</h1>
          <ul className="list-unstyled mt-3">
            <li>
              <Button type="link" href="/about">
                About
              </Button>
            </li>
            <li>
              <Button type="link" href="/privacy-policy">
                Privacy & Policy
              </Button>
            </li>
            <li>
              <Button type="link" href="/term-conditions">
                Term & Conditions
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h1 className="h5 text-primary font-weight-bold">Getting Touch</h1>
          <ul className="list-unstyled mt-3 text-primary">
            <li>support@santuy.co.id</li>
            <li>(+62)8123456789</li>
            <li>Sukamaju Street 14, Bekasi City</li>
          </ul>
        </div>
      </div>
      <hr className="bg-info" />
      <div className="row">
        <div className="col">
          <p className="text-primary text-center">
            Copyright 2021 - All rights reserved - Santuy
          </p>
        </div>
      </div>
    </footer>
  );
}
