import React from "react";

import { InputText } from "elements/Form";

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props;

  return (
    <div className="container booking-information">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card">
            <figure className="img-wrapper">
              <img
                className="img-cover"
                src={itemDetails.imageUrl[0].url}
                alt={itemDetails.name}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="row align-items-center mt-4">
        <div className="col-lg-4 offset-lg-1">
          <div className="meta-wrapper text-secondary">
            <h1 className="h2 font-weight-bold">{itemDetails.name}</h1>
            <p className="font-weight-normal">
              {itemDetails.city}, {itemDetails.country}
            </p>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-4">
          <p className="font-weight-bold text-secondary">
            ${+checkout.duration * itemDetails.price} per {checkout.duration}{" "}
            {itemDetails.unit}
            {+checkout.duration > 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-lg-5 offset-lg-1 text-secondary">
          <div className="first-name">
            <label htmlFor="firstName">First Name</label>
            <InputText
              id="firstName"
              name="firstName"
              value={data.firstName}
              onChange={props.onChange}
              type="text"
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last Name</label>
            <InputText
              id="lastName"
              name="lastName"
              value={data.lastName}
              onChange={props.onChange}
              type="text"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              name="email"
              value={data.email}
              onChange={props.onChange}
              type="email"
            />
          </div>
          <div className="phone">
            <label htmlFor="phone">Number Phone</label>
            <InputText
              id="phone"
              name="phone"
              value={data.phone}
              onChange={props.onChange}
              type="tel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
