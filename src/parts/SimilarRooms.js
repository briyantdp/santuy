import React from "react";

import Button from "elements/Button";
import "assets/scss/style.scss";

export default function SimilarRooms(props) {
  return (
    <section className="container special p-4 mt-5">
      <h1 className="h1 font-weight-bold text-secondary text-lg-left text-center mb-4">
        Similar Rooms
      </h1>
      <div className="row">
        {props.data.map((item, index) => {
          return (
            <div className="col-lg-4 col-sm-6" key={index}>
              <div className="card card-featured mb-4">
                <div className="tag">
                  <span className="font-weight-bold">${item.price}</span>{" "}
                  <span>per-{item.unit}</span>
                </div>
                <figure className="img-wrapper m-0">
                  <img
                    src={item.imageUrl}
                    className="img-cover"
                    alt={item.name}
                  />
                </figure>
                <div className="card-body p-3">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white text-decoration-none"
                    href={`/properties/${item._id}`}
                  >
                    <h4 className="card-title mb-0">{item.name}</h4>
                    <p className="card-text font-weight-light">
                      {item.city}, {item.country}
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
