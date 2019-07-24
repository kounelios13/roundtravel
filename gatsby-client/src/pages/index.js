import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageHeader from "../components/image-header/image-header"
import CityImage from "../components/city/city-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageHeader fileName={'2.jpg'} />
  </Layout>
)

export default IndexPage
