import React from "react";

export default function Controller(props) {
  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-7 col-md-4 col-lg-3">{props.children}</div>
      </div>
    </section>
  );
}
