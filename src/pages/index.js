import React from "react"
//import ReactModal from 'react-modal'
//import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/About"
import Offers from "../components/Offers"
import Skills from "../components/Skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"


//ReactModal.setAppElement('.contactBtn')

/*handleModalOpen = event => {
// console.log('handleModalOpen: ', event);
this.setState({ isModalOpen: true })
}

handleModalClose = event => {
// console.log('handleModalOpen: ', event);
this.setState({ isModalOpen: false })
}*/

const IndexPage = ({data}) => (
	<Layout className="main-container">
		<SEO title="Ремонт под ключ" />
		<Header></Header>
		<Work></Work>
		<About></About>
		<Offers></Offers>
		<Promotion></Promotion>
		<Skills></Skills>
		<Footer></Footer>
	</Layout>
)

export default IndexPage

