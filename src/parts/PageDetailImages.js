import React from "react";

export default function PageDetailImages(props) {
  return (
    <section className="container p-4 mt-md-5 mt-3 detail-img">
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`detailImages-${index}`}
              className={`item column-6 ${
                index > 0 ? "row-1" : "row-2"
              } d-none d-md-block`}
            >
              <div className="card">
                <figure className="img-wrapper m-0">
                  <img src={item.url} alt={item._id} className="img-cover" />
                </figure>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row">
        {props.data.map((item, index) => {
          return (
            <div
              key={`detailImages-${index}`}
              className={`item d-block d-md-none my-2`}
            >
              <div className="card">
                <figure className="img-wrapper m-0">
                  <img src={item.url} alt={item._id} className="img-cover" />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
