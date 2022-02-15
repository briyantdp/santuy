import React, { Component } from "react";

// Parts
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import HeroInfo from "../parts/HeroInfo";
import ChooseUs from "../parts/ChooseUs";
import Recommended from "../parts/Recommended";
import SpecialOffers from "../parts/SpecialOffers";
import Testimonial from "../parts/Testimonial";
import Footer from "../parts/Footer";

// Data JSON
import dataLandingPage from "../json/landingPage.json";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refRecommended = React.createRef();
  }

  componentDidMount() {
    document.title = "Santuy | Home";
    window.scroll(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero refRecommended={this.refRecommended} />
        <HeroInfo data={dataLandingPage.hero} />
        <ChooseUs />
        <Recommended
          refRecommended={this.refRecommended}
          data={dataLandingPage.recommended}
        />
        <SpecialOffers data={dataLandingPage.special} />
        <Testimonial data={dataLandingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
