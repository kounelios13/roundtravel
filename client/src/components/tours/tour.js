import React, { Component } from "react"
import Layout from "../layout"
import ImageHeader from "../image-header/image-header"
import TourIntro from "./tour-intro"
import TourSummary from "./tour-summary"
import TourDetails from "./tour-details"
import TourSchedule from "./tour-schedule"

class Tour extends Component {
  render() {
    return (
      <Layout>
        <ImageHeader images={[{url: 'bali-waterfall.jpg', alt: 'asd'}, {url: 'bali-underwater.jpg', alt: 'asd'}, {url: 'bali-land.jpg', alt: 'asd'}, {url: 'bali-rock.jpg', alt: 'asd'}, {url: 'bali-nature.jpg', alt: 'asd'}]} pageTitle={'Μπαλι'} pageSubtitle={'Το νισι των θεων'} />
        <TourIntro />
        <TourSummary />
        <TourDetails />
        <TourSchedule />
      </Layout>
    )
  }
}

export default Tour