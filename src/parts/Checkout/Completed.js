import React from "react";

import SuccessIllustration from "assets/images/payment/success-illustration.jpg";

export default function Completed() {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center text-center">
        <div className="col-lg-4 col-md-6 ">
          <img
            src={SuccessIllustration}
            className="img-fluid"
            alt="completed checkout apartment"
          />
          <p className="text-secondary mt-4">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  );
}
