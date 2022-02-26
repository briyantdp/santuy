import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";
export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm mt-5">
      <Fade bottom>
        <div className="row">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
        </div>
        <div className="row">
          <div className="col text-secondary text-center">
            <h1 className="h1 font-weight-bold mb-0">{data.title}</h1>
            <p>
              {data.city}, {data.country}
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
