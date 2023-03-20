import { useState } from "react"
import { fetcher } from "/core/api/fetcher"
import { getAllPostsQuery, getPerPagePostsQuery } from "../api/graphql"

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
