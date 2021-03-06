/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { Helmet } from "react-helmet"
import Footer from "./footer"
import useSeo from "../hooks/useSeo"

const Layout = ({ children }) => {
  const seo = useSeo()
  const { fallbackSeo: { description, title } } = seo
  return (
    <>
      <Helmet htmlAttributes={{
        lang: "en"
      }}>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
              integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
              crossOrigin="anonymous"/>
      </Helmet>
      <Header title={title}/>
      <div>
        <main>{children}</main>
        <Footer title={title}/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
