import { useEffect, useState } from "react"
import { CircularProgress, IconButton, Portal } from "@mui/material"
import Backdrop from "@mui/material/Backdrop"
import Close from "@mui/icons-material/Close"
import parse from "html-react-parser"

import { Slider } from "/components/UI/slider/Slider"
import { usePortfolioLoading } from "/core/hooks/usePostsLoading"

export const PortfolioLightbox = ({ portfolioId, handleClose }) => {
    const [portfolio, setPortfolio] = useState([])

    const { data, error } = usePortfolioLoading(portfolioId)
    const post = data?.post

    useEffect(() => {
        if (post) {
            const images = []
            parse(post.content, {
                replace: domNode => {
                    console.log(domNode)

                    domNode.name === "img" &&
                        images.push({
                            ...domNode.attribs,
                            id: domNode.attribs["data-id"],
                            src: domNode.attribs["src"],
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
