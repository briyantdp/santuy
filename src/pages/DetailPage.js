import React, { Component } from "react";

import Header from "../parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailImages from "parts/PageDetailImages";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import SimilarRooms from "parts/SimilarRooms";
import Testimonial from "parts/Testimonial";
import Footer from "../parts/Footer";

import itemDetails from "../json/itemDetails.json";

class DetailPage extends Component {
  componentDidMount() {
    document.title = "Santuy | Home";
    window.scroll(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header />
        <PageDetailTitle data={itemDetails} breadcrumb={breadcrumb} />
        <PageDetailImages data={itemDetails.imageUrl} />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <PageDetailDescription data={itemDetails} />
            </div>
            <div className="col-md-5 offset-md-1">
              <BookingForm itemDetails={itemDetails} />
            </div>
          </div>
        </div>
        <SimilarRooms data={itemDetails.similar} />
        <Testimonial data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default DetailPage;
