import { useEffect, useState } from "react"
import { Portal, Backdrop, CircularProgress, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
import parse from "html-react-parser"

import useSWR from "swr"
import { Slider } from "/components/UI/slider/slider"

import { fetcher } from "/core/api/fetcher"
import { getPostQuery } from "/core/api/graphql"

export const PortfolioLightbox = ({ portfolioId, handleClose }) => {
    const [portfolio, setPortfolio] = useState([])
    const { data, error } = useSWR(
        process.env.GRAPHQL_URL + "/" + portfolioId,
        () =>
            fetcher(
                process.env.GRAPHQL_URL,
                { portfolioId },
                getPostQuery(portfolioId)
            )
    )

    const post = data?.data?.post

    useEffect(() => {
        if (post) {
            const images = []
            parse(post.content, {
                replace: domNode => {
                    domNode.name === "img" &&
                        images.push({
                            ...domNode.attribs,
                            id: domNode.attribs["data-id"],
                            src: domNode.attribs["data-full-url"],
                        })
                },
            })
            setPortfolio(images)
        }
    }, [post])

    if (error) {
        return <h5>Ошибка загрузки фото проекта.</h5>
    }

    return (
        <Portal>
            <Backdrop
                open={!!portfolioId}
                sx={{
                    color: "#fff",
                    bgcolor: "#000",
                    minWidth: "100vw",
                    zIndex: 1000,
                }}
            >
                {post && portfolio.length && (
                    <Slider title={post.title} slides={portfolio} />
                )}
                {!post && <CircularProgress />}
                <IconButton
                    color="overlay"
                    sx={{
                        position: "absolute",
                        top: "2rem",
                        right: "2rem",
                        zIndex: 2000,
                    }}
                    aria-label="close"
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>
            </Backdrop>
        </Portal>
    )
}
