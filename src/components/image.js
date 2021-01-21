import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
      query {
          image: file(relativePath: { eq: "8.jpg" }) {
              sharp: childImageSharp {
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
      }
  `)

  if (!image?.sharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <ImageBackground tag='section' fluid={image.sharp.fluid} fadeIn='soft'/>
}

export default HotelImage
