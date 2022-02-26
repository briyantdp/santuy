import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "../parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailImages from "parts/PageDetailImages";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import SimilarRooms from "parts/SimilarRooms";
import Testimonial from "parts/Testimonial";
import Footer from "../parts/Footer";

// import itemDetails from "../json/itemDetails.json";

import { checkoutBooking } from "stores/actions/checkout";
import { fetchPage } from "stores/actions/page";


class DetailPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    
    if(!this.props.page[this.props.match.params.id]);
      this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id)
      .then((response) => {
        document.title = `Santuy | ${response.title}`
      })
  }

  render() {
    const { page, match, checkoutBooking} = this.props;

    if(!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header />
        <PageDetailTitle data={page[match.params.id]} breadcrumb={breadcrumb} />
        <PageDetailImages data={page[match.params.id].imageId} />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <Fade bottom>
              <div className="col-md-5 offset-md-1">
                <BookingForm dataBooking={page[match.params.id]} startBooking={checkoutBooking} />
              </div>
            </Fade>
          </div>
        </div>
        <SimilarRooms data={page[match.params.id].similarRoomsId} />
        <Testimonial data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page : state.page,
})

export default connect(mapStateToProps, {fetchPage, checkoutBooking})(DetailPage);
