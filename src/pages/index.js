import React from "react"
import Layout from "./../components/layout"
import Seo from "./../components/seo"
import About from "../components/about"

const IndexPage = () => (
    <Layout> 
      <Seo title="About me" />
      <About /> 
    </Layout>
  )

export default IndexPage
