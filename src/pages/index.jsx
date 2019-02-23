import React from "react"

import Layout from "../components/layout"
import nucleus from "../images/nucleus.svg"

const IndexPage = () => (
  <Layout>
    <img
      src={nucleus}
      alt="Nucleus"
      style={{
        maxHeight: 642,
        maxWidth: 560,
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        marginTop: -321,
        marginLeft: -280,
      }}
    />
  </Layout>
)

export default IndexPage
