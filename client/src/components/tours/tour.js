import React, { Component } from "react"
import Layout from "../layout"
import ImageHeader from "../image-header/image-header"
import TourIntro from "./tour-intro"
import TourSummary from "./tour-summary"
import TourDetails from "./tour-details"
import TourSchedule from "./tour-schedule"
import TourCities from "./tour-cities"
import TourReviews from "./tour-reviews"
import TourGroup from "./tour-group"

class Tour extends Component {
  render() {
    const tours = [
      {
        image: 'bali-beach-2.jpg',
        title: 'Μπαλι - Εξερευνηση',
        price: '40€'
      },
      {
        image: 'bali-sea.jpg',
        title: 'Μεγαλος γυρος Μπαλι',
        price: '40€'
      },
      {
        image: 'bali-land.jpg',
        title: 'Ινδονησια',
        price: '40€'
      },
      {
        image: 'bali-waterfall.jpg',
        title: 'ΠΟΛΩΝΙΑ-ΒΙΕΝΝΗ ΚΑΛΟΚΑΙΡΙ 2019',
        price: '40€'
      }
    ]

    return (
      <Layout>
        <ImageHeader images={[{url: 'bali-waterfall.jpg', alt: 'asd'}, {url: 'bali-underwater.jpg', alt: 'asd'}, {url: 'bali-land.jpg', alt: 'asd'}, {url: 'bali-rock.jpg', alt: 'asd'}, {url: 'bali-nature.jpg', alt: 'asd'}]} pageTitle={'Μπαλι'} pageSubtitle={'Το νισι των θεων'} />
        <TourIntro />
        <TourSummary />
        <TourDetails />
        <TourSchedule />
        <TourCities />
        <TourReviews />
        <TourGroup tours={tours} suggestedTitle={'Δειτε περισσοτερες εκδρομες'} suggestedSubtitle={'Περισσοτερες επιλογες'} />
      </Layout>
    )
  }
}

export default Tour