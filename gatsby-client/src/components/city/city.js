import React from "react"
import CityImage from "./city-image"
import ImageHeader from "../image-header/image-header"
import Layout from "../layout"
import TourGroup from "../tours/tour-group"


const City = (props) => {
  return (
    <Layout>
      <ImageHeader title={'Ταξιδι στο παρισι'} subtitle={'Φτηνα εισητηρια και εκδρομες'} fileName={'1.jpg'} />
      <TourGroup />
    </Layout>
  )
}

export default City