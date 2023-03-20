import useSWR from "swr"

import { array2Obj } from "/core/helpers/utils"
import { fetcher } from "./fetcher"
import {
    getAllPagesQuery,
    getAllPostsQuery,
    getMenuQuery,
    getPostQuery,
} from "./graphql"

export async function getPost(id) {
    const { data } = await fetcher(
        process.env.GRAPHQL_URL,
        { id },
        getPostQuery(id)
    )

    return data
}

export async function getAllPosts() {
    const { data } = await fetcher(
        process.env.GRAPHQL_URL,
        {},
        getAllPostsQuery()
    )
    return data?.posts?.edges
}

export async function getAllPages() {
    const { data } = await fetcher(
        process.env.GRAPHQL_URL,
        {},
        getAllPagesQuery()
    )

    if (!data) return null
    return array2Obj(data?.pages?.nodes)
}

export async function getMenuItems() {
    const { data } = await fetcher(process.env.GRAPHQL_URL, {}, getMenuQuery())

    if (!data) return null
    return data?.menuItems?.nodes
}
