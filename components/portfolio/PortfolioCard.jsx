import React, { memo, useCallback, useMemo, useState } from "react"
import Image from "next/image"
import IconButton from "@mui/material/Button"
import TouchAppIcon from "@mui/icons-material/TouchApp"

import { HtmlContent } from "/components/UI/Html-content"
import { srcSet2Array } from "/core/helpers/utils"

export const PortfolioCard = memo(
    ({ id, title, excerpt, featuredImage, onPortfolioClick }) => {
        const [imageLoaded, setImageLoaded] = useState(false)
        const image = featuredImage?.node
        const srcSet = useMemo(() => srcSet2Array(image.srcSet), [image.srcSet])

        /*        const remoteLoader = useCallback(
            ({ src, width }) => {
                let curKey = Object.keys(srcSet).find(
                    key => key === width + "w"
                )
                return srcSet[curKey] || src
            },
            [srcSet]
        )*/

        return (
            <>
                <div
                    role="link"
                    className={`img-wrapper ${imageLoaded ? "loaded" : ""}`}
                    onClick={() => onPortfolioClick(id)}
                >
                    {image?.sourceUrl && (
                        <Image
                            src={imageLoaded ? image.sourceUrl : srcSet?.[0]}
                            srcSet={image?.srcSet}
                            //loader={remoteLoader}
                            layout="fill"
                            //objectFit="cover"
                            sizes={image?.sizes || "100%"}
                            height={0}
                            alt={image?.altText}
                            //unoptimized
                            placeholder="blur"
                            blurDataURL={srcSet?.[0] || image.sourceUrl}
                            onLoadingComplete={() => setImageLoaded(true)}
                        />
                    )}
                    <IconButton>
                        <TouchAppIcon />
                    </IconButton>
                </div>
                <div className="description flex-column">
                    <h3 className="portfolio-title">{title}</h3>
                    {excerpt && (
                        <HtmlContent Tag="p" className="text">
                            {excerpt}
                        </HtmlContent>
                    )}
                </div>
            </>
        )
    }
)
