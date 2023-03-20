import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Skeleton from "@mui/material/Skeleton"

import { usePostsLoading } from "/core/hooks/usePostsLoading"

import { PortfolioCard } from "./PortfolioCard"
import { PortfolioLightbox } from "./PortfolioLightbox"

const PAGE_SIZE = 6

export const PortfolioList = () => {
    const [posts, setPosts] = useState([])
    const [cursor, setCursor] = useState("")
    const [activePortfolio, setActivePortfolio] = useState(null)

    const [loadProjectsFn, isLoading, error] = usePostsLoading(res => {
        setPosts([...posts, ...res.posts.edges])
        let last = res.posts.edges?.pop()
        setCursor(res.posts.pageInfo.hasNextPage ? last?.cursor : undefined)
    }, PAGE_SIZE)

    useEffect(() => {
        loadProjectsFn(cursor)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (error) {
        return (
            <>
                <b>{error}</b>
                <div>Попробуйте обновить страницу.</div>
            </>
        )
    }

    return (
        <>
            <Grid container spacing={"2rem"}>
                {posts?.map(({ post }) => (
                    <Grid item mobile={12} tablet={6} desktop={4} key={post.id}>
                        <PortfolioCard
                            {...post}
                            onPortfolioClick={() => setActivePortfolio(post.id)}
                        />
                    </Grid>
                ))}

                {isLoading && (
                    <Grid item mobile={12} tablet={6} desktop={4}>
                        <Skeleton
                            height={0}
                            sx={{ pt: "56%", transform: "none" }}
                        />
                        <Skeleton height="2.2rem" width="100%" />
                        <Skeleton height="1rem" width="60%" />
                        <Skeleton height="1rem" width="70%" />
                    </Grid>
                )}
            </Grid>

            {typeof cursor !== "undefined" && (
                <Button
                    variant="outlined"
                    onClick={() => loadProjectsFn(cursor)}
                    sx={{ m: "auto", borderRadius: "1px" }}
                >
                    Показать еще
                </Button>
            )}

            {activePortfolio && (
                <PortfolioLightbox
                    portfolioId={activePortfolio}
                    handleClose={() => setActivePortfolio(null)}
                />
            )}
        </>
    )
}
