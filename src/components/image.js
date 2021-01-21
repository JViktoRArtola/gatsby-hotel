import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

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

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`

const Text = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63,.4),rgba(34,49,63,.4));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 4rem;
        margin: 0%;
        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 2.6rem;
        }
    }
`

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

  return <ImageBackground tag='section' fluid={image.sharp.fluid} fadeIn='soft'>
    <Text>
      <h1>Welcome to Gatsby Hotel</h1>
      <p>The Best Hotel for your vacations</p>
    </Text>
  </ImageBackground>
}

export default HotelImage
