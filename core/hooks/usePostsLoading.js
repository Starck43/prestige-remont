import { useState } from "react"
import useSWR from "swr"

import { fetcher } from "/core/api/fetcher"
import {
    getAllPostsQuery,
    getPerPagePostsQuery,
    getPostQuery,
} from "/core/api/graphql"

export const usePostsLoading = (cb, limit) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fn = async (cursor = "") => {
        try {
            setIsLoading(true)
            const { data, error } = await fetcher(
                process.env.GRAPHQL_URL,
                {},
                limit ? getPerPagePostsQuery(cursor, limit) : getAllPostsQuery()
            )
            if (error) {
                setError(error)
            }

            if (data) {
                cb(data)
            }
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }
    return [fn, isLoading, error]
}

export const usePortfolioLoading = id => {
    const { data, error } = useSWR(process.env.GRAPHQL_URL + "/" + id, () =>
        fetcher(process.env.GRAPHQL_URL, { id }, getPostQuery(id))
    )
    return { data: data?.data, error }
}
