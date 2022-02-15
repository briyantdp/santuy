import React, { Component } from "react";
import Breadcrumb from "elements/Breadcrumb";
// import { InputDate, InputNumber } from "elements/Form";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Village Cidadas", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <InputNumber
              max={30}
              name="value"
              suffix=" night"
              isSuffixPlural
              value={this.state.value}
              onChange={this.handleChange}
            /> */}
            {/* <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
