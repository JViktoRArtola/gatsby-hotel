import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Image from 'gatsby-image';

const Text = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr) ;
        column-gap: 2rem;
    }
    p {
        line-height: 2;
        
    }
`

const ContentHome = () => {
  const info = useStaticQuery(graphql`
      query {
          allDatoCmsPage(filter: {slug: {eq: "home"}}) {
              nodes {
                  title
                  content
                  image {
                      fluid {
                          ...GatsbyDatoCmsFluid
                      }
                  }
              }
          }
      }
  `)
  console.log(info.allDatoCmsPage.nodes[0])
  const { title, content, image } = info.allDatoCmsPage.nodes[0]
  return (
    <>
      <h2 css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}>{title}</h2>
      <Text>
        <p>{content}</p>
        <Image fluid={image.fluid}/>
      </Text>
    </>
  )
}

export default ContentHome
