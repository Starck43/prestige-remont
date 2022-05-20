import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import About from "../components/About"
import Offers from "../components/Offers"
import Promotion from "../components/Promotion"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

import { getAllPages, getAllPosts, getMenuItems } from "../core/api"

export default function Index({ nav, pages, posts }, preview) {
  return (
    <Layout preview={preview}>
      <Navbar nav={nav} />
      <Header {...pages["index"]} />
      <About {...pages["about-us"]} />
      <Portfolio {...pages["portfolio"]} projects={posts} />
      <Offers {...pages["offers"]} />
      <Promotion {...pages["promotion"]} />
      <Skills {...pages["skills"]} />
      <Footer {...pages["contacts"]} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  let nav = await getMenuItems(preview)
  let pages = await getAllPages(preview)
  let posts = await getAllPosts(preview)

  return {
    props: { nav, pages, posts, preview },
  }
}
