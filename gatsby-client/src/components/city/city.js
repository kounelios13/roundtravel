import React from "react"
import CityImage from "./city-image"
import ImageHeader from "../image-header/image-header"
import Layout from "../layout"


const City = (props) => {
  console.log(props)
  return (
    <Layout>
      <ImageHeader fileName={'2.jpg'} />
    </Layout>
  )
}

export default City