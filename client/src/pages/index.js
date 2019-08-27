import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Helmet} from "react-helmet";


const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <Helmet>
      <meta name="google-site-verification" content="zDRG6iIRaFO0vPYHkGZ4GS6Aiwd-Y125CzpX5rpmiu0" />
    </Helmet>
    {/*<ImageHeader images={[{fileName: 'paris-notre.jpg', alt: 'Paris alt'}]} />*/}
  </Layout>
)

export default IndexPage