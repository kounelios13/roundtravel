import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../../styles/image-header.scss'
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax"
import BackgroundImage from "gatsby-background-image"



const Image = (props) => {
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

  return (
    <figure>
      <Img alt={props.alt} className={props.className} fluid={imgFluid} />
    </figure>
  )
}

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired
}

export default Image