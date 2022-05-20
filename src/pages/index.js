import React from "react"
//import ReactModal from 'react-modal'
//import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/Layout"
import Seo from "../components/seo"
// Components
import Header from "../../components/Header"
import Work from "../../components/Work"
import About from "../../components/About"
import Offers from "../../components/Offers"
import Skills from "../../components/Skills"
import Promotion from "../../components/Promotion"
import Footer from "../../components/Footer"

//import data from "../main.js"

const IndexPage = ({ data }) => (
  <Layout className="main-container">
    <Seo title='Престиж ремонт' />
    <Header/>
    <Work/>
    <About/>
    <Offers/>
    <Promotion/>
    <Skills/>
    <Footer/>
  </Layout>
)

export default IndexPage
