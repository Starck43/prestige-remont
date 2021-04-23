import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"

import {getYear} from "../main"

const Footer = ({config}) => {

  const query = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          authorUrl
        }
      }
      wpPage(slug: { eq: "contacts" }) {
        id
        title
        content
      }
    }
  `)

  const {title, author, authorUrl} = query.site.siteMetadata //get data from query to gatsby-config.js

  return (
    <section id="footer">

      <div className="contacts-container">
        <Fade bottom cascade>
          <h1>{query.wpPage.title}</h1>
        </Fade>
        <Fade>{parse(query.wpPage.content)}</Fade>
      </div>
      <div className="subfooter-container centered">
        <span>© {getYear()} {title} </span>
        <span>[ разработчик <a href={authorUrl}>{author}</a> ]</span>
      </div>
    </section>
  )
}


export default Footer
