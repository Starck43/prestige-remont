import { useEffect, useState } from "react"
import { getWindowDimensions } from "/core/helpers/utils"

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        const handleResize = () => setWindowDimensions(getWindowDimensions())

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
}
