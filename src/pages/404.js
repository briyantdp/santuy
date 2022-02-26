import React from "react";

import { withRouter } from "react-router-dom";

import Button from "elements/Button";

function NotFound(props) {
  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          <h1 className="h1 font-weight-bold">Are you lost ?</h1>
          <p className="pt-4">
            Some page are still in development, maybe you can go back if you
            want
          </p>
          <div>
            <Button
              className="btn mt-5"
              type="button"
              onClick={() => props.history.goBack()}
              isPrimary
            >
              Yes, bring me to safe place please
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(NotFound);
