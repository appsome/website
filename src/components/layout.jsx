import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Scale from "./scale"
import Enyuka from "./enyuka"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: `100%`,
            marginBottom: -100,
          }}
          className="page-wrap"
        >
          <Scale />

          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
        </div>

        <footer
          style={{
            height: 100,
            margin: `0 auto`,
            maxWidth: 960,
            position: `relative`,
          }}
        >
          <div style={{ padding: `0px 1.0875rem 1.45rem`, fontSize: `0.8em` }}>
            Part of the
            <Enyuka />
            network
          </div>
          <Scale
            style={{
              transform: `scaleY(-1)`,
              bottom: 0,
              position: `absolute`,
              width: `100%`,
            }}
          />
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
