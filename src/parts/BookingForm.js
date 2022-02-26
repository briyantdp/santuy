import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { InputDate, InputNumber } from "elements/Form";
import Button from "elements/Button";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });

    }
    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.dataBooking._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { dataBooking } = this.props;

    return (
      <section className="text-secondary">
        <h1 className="h1 mb-4 font-weight-bold">Booking Place</h1>
        <h3 className="h3 font-weight-normal">
          Start from{" "}
          <span className="font-weight-bold">
            {`$${dataBooking.price} per-night`}{" "}
          </span>
        </h3>

        <div className="input-number-night my-5">
          <label htmlFor="duration" style={{ fontSize: "1.5rem" }}>
            How long you will stay?
          </label>
          <InputNumber
            max={30}
            suffix={" night"}
            isSuffixPlural
            onChange={this.updateData}
            name="duration"
            value={data.duration}
          />
        </div>

        <div className="input-date-booking my-5">
          <label htmlFor="date" style={{ fontSize: "1.5rem" }}>
            Pick a date
          </label>
          <InputDate onChange={this.updateData} name="date" value={data.date} />
        </div>

        <h6
          className="font-weight-normal"
          style={{ marginBottom: 40, fontSize: "1.5rem" }}
        >
          You will pay{" "}
          <span className="font-weight-bold">
            {`$${dataBooking.price * data.duration} USD`}
          </span>{" "}
          per{" "}
          <span className="font-weight-bold">
            {data.duration} {data.duration > 1 ? 'nights' : 'night'}
          </span>
        </h6>

        <Button
          className="btn py-2 font-weight-bold"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
          style={{ fontSize: "1.5rem" }}
        >
          Continue to Book
        </Button>
      </section>
    );
  }
}

BookingForm.propTypes = {
  dataBooking: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
