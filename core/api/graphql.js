export const getPostQuery = id => `query Post{
      post(id:"${id}") {
        id
        title
        excerpt
        content
        categories{
          edges{
            node{
            name
            }
          }
        }
      }
    }`

export const getAllPostsQuery = () => `query allPosts {
      posts {
        edges {
          post: node {
            id
            title
            slug
            excerpt
            uri
            featuredImage {
              node {
                title
                altText
                sourceUrl
                srcSet
              }
            }
          }
        }
      }
    }`

export const getPerPagePostsQuery = (cursor, limit) => `query allPosts {
      posts(first:${limit} after:"${cursor}") {
        edges {
          post: node {
            id
            title
            slug
            excerpt
            uri
            featuredImage {
              node {
                title
                altText
                sourceUrl
                srcSet
              }
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }`

export const getAllPagesQuery = () => `query allPages {
        pages {
          nodes {
            slug
            title
            content
            featuredImage {
              node {
                title
                srcSet
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
              }
            }
          }
        }
      }`

export const getMenuQuery = () => `query Nav {
      menuItems {
        nodes {
          databaseId
          path
          label
        }
      }
    }`
