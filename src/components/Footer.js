import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"

import data from "../main"

const Footer = () => {
  const query = useStaticQuery(graphql`
    {
      wpPage(slug: {eq: "contacts"}) {
        id
        title
        content
      }
    }
  `)
  return (
    <section id="contact">
      <div className="footer-container">
        <Fade bottom cascade>
          <h1>{query.wpPage.title}</h1>
        </Fade>

        <Fade>
          {parse(query.wpPage.content)}
        </Fade>
      </div>
      <div id="devCompany">
        разработчик {" "}<a href={data.devCompany.url}>{data.devCompany.name}</a>
      </div>
    </section>
  )
}

export default Footer
