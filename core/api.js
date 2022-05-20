import { fetcher } from "./fetcher"
import { array2Obj } from "./helpers/utils"

const API_URL = {
  url: process.env.WORDPRESS_URL,
  token: process.env.WORDPRESS_AUTH_REFRESH_TOKEN,
}

export async function getPost(id) {
  //const post = DATA.posts[0]
  const data = await fetcher(
    API_URL,
    `query Post{
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
    }`,
    { id }
  )
  return data?.post
}

export async function getAllPosts() {
  const data = await fetcher(
    API_URL,
    `query allPosts {
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
    }`,
    {
      variables: {},
    }
  )
  return data?.posts?.edges
}

export async function getAllPages() {
  const data = await fetcher(
    API_URL,
    `query allPages {
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
      }`,
    {
      variables: {},
    }
  )
  if (!data) return null
  return array2Obj(data?.pages?.nodes)
}

export async function getMenuItems() {
  const data = await fetcher(
    API_URL,
    `query Nav {
      menuItems {
        nodes {
          databaseId
          path
          label
        }
      }
    }`,
    {
      variables: {},
    }
  )
  if (!data) return null
  return data?.menuItems?.nodes
}
