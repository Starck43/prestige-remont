import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Image from "gatsby-image"

import Layout from "../components/layout"

// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"


const IndexPage = ({data}) => {
  const posts = data.allWpPost.nodes
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout isHomePage>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                </header>

                {/* if we have a featured image for this post let's display it */}
                {featuredImage?.fluid && (
                  <Image
                    fluid={featuredImage.fluid}
                    alt={featuredImage.alt}
                  />
                )}

                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
            </li>
          )
        })}
      </ol>

    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query WordPressPostArchive() {
    allWpPost {
      nodes {
        id
        title
        slug
        excerpt
        uri
        featuredImage {
          node {
            id
            sourceUrl
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
