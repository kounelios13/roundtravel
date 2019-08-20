import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../../styles/image-header.scss'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from "prop-types"

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

const BgImage = (props) => {
  const data = useStaticQuery(graphql`
      query{
        allFile(filter: {extension: {regex: "/(jpeg|jpg|gif|png)/"}, relativePath: {regex: "/"}}) {
        edges {
          node {
            relativePath
            name
            extension
            childImageSharp{
              fluid(maxWidth: 1920){
                ...GatsbyImageSharpFluid_withWebp
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

  return (
    <BackgroundImage Tag={props.tag} className={props.className} fluid={imgFluid} >
          {props.children}
    </BackgroundImage>
  )
}

BackgroundImage.propTypes = {
  className: PropTypes.string,
  fileName: PropTypes.string.isRequired,
  tag: PropTypes.string

}

BackgroundImage.defaultProps = {
  Tag: 'section'
}



export default BgImage