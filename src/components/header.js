import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Navigation from "./navigation"

const HomeLink = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`

const Header = () => (
  <header style={{
    backgroundColor: "#222",
    padding: ".5rem"
  }}>
    <div css={css`
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: 768px) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          }
    `}>
      <HomeLink to='/'>
        <h1>Gatsby Hotel</h1>
      </HomeLink>
      <Navigation/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
