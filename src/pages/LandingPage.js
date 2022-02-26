import React, { Component } from "react";
import { connect } from "react-redux";

// Parts
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import HeroInfo from "../parts/HeroInfo";
import ChooseUs from "../parts/ChooseUs";
import Recommended from "../parts/Recommended";
import SpecialOffers from "../parts/SpecialOffers";
import Testimonial from "../parts/Testimonial";
import Footer from "../parts/Footer";

import { fetchPage } from "stores/actions/page";


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refRecommended = React.createRef();
  }

  componentDidMount() {
    document.title = "Santuy | Home";
    window.scroll(0, 0);

    if(!this.props.page.landingPage);
    this.props.fetchPage(`/landing-page`, "landingPage")
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;
    return (
      <>
        <Header />
        <Hero refRecommended={this.refRecommended} />
        <HeroInfo data={page.landingPage.hero} />
        <ChooseUs />
        <Recommended
          refRecommended={this.refRecommended}
          data={page.landingPage.recommended}
        />
        <SpecialOffers data={page.landingPage.specialOffers} />
        <Testimonial data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page : state.page
})

export default connect(mapStateToProps, {fetchPage})(LandingPage);
