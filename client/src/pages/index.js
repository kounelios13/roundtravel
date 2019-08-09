import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageHeader from "../components/image-header/image-header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/*<ImageHeader images={[{fileName: 'paris-notre.jpg', alt: 'Paris alt'}]} />*/}
  </Layout>
)

export default IndexPage