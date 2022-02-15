import Breadcrumb from "elements/Breadcrumb";
import React from "react";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm mt-5">
      <div className="row">
        <div className="col">
          <Breadcrumb data={breadcrumb} />
        </div>
      </div>
      <div className="row">
        <div className="col text-secondary text-center">
          <h1 className="h1 font-weight-bold mb-0">{data.name}</h1>
          <p>
            {data.city}, {data.country}
          </p>
        </div>
      </div>
    </section>
  );
}
