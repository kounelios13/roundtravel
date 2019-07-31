import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../../styles/image-header.scss'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const CityImage = (props) => {
  const data = useStaticQuery(graphql`
      query{
        allFile(filter: {extension: {regex: "/(jpeg|jpg|gif|png)/"}, relativePath: {regex: "/city/paris/"}}) {
        edges {
          node {
            relativePath
            name
            extension
            childImageSharp{
              fluid(maxWidth: 1920){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const imgFluid = data.allFile.edges.filter((edge=>{
    return `${edge.node.name}.${edge.node.extension}` === props.fileName
    }))
    .map(edge=>{
      return edge.node.childImageSharp.fluid
    })
  return <Img onLoad={props.onLoad} className={props.className} fluid={imgFluid} />

}

export default CityImage