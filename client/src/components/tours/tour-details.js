import '../../styles/tours/tour-details.scss'





import React, { Component } from "react"
import TourFlights from "./tour-flights"
import TourIncluded from "./tour-included"
import TourPricing from "./tour-pricing"
import TourInfo from "./tour-info"
import TourLocations from "./tour-locations"
import TourActionButtons from "./tour-action-buttons"

class TourDetails extends Component {
  state = {
    date: new Date()
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <section className='p-0 m-0 d-flex flex-wrap mb-5'>
          <div className="col-12 text-center my-6">
            <h3 className='display-5 text-bold py-2 m-0'>Πληροφοριες εκδρομης</h3>
            <h2 className='display-7 text-normal m-0 p-0'>Πληροφοριες οπως πτησεις, προγραμμα, αεροπορικα εισητηρια, ξενοδοχεια</h2>
          </div>
          <div className="offset-0  offset-lg-1 offset-xl-2 col-lg-6 col-xl-5">
            <TourInfo />
            <TourIncluded />
            <TourPricing />
          </div>
          <div className="col-10 offset-1 mt-5 mt-lg-0 offset-lg-0 col-lg-4 p-0 col-xl-3">
            <TourLocations />
            <TourActionButtons />
            <TourFlights />
          </div>
        </section>
      </div>
    )
  }
}

export default TourDetails