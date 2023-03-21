import axios from "axios"

import { array2Obj } from "/core/helpers/utils"
import { fetcher } from "./fetcher"
import {
    getAllPagesQuery,
    getAllPostsQuery,
    getMenuQuery,
    getPostQuery,
} from "./graphql"

export const sendPostMessage = data => {
    return axios({
        method: "POST",
        url: process.env.SERVER + process.env.API_ENDPOINTS.sendMessage,
        data,
    })
        .then(res => {
            return {
                data: res.data,
                status: "success",
                message: "Сообщение успешно отправлено!",
            }
        })
        .catch(err => {
            return {
                data: err.response.data,
                status: "error",
                message: err.response.data.message,
            }
        })
}

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
