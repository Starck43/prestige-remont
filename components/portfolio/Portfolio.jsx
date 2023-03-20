import { useRef } from "react"
import dynamic from "next/dynamic"

import { FadeSection } from "/components/UI/animation/FadeSection"
import { Title } from "/components/UI/title"

import { useInViewport } from "/core/hooks/useInViewport"

const LazyPortfolio = dynamic(
    () => import("./PortfolioList").then(mod => mod.PortfolioList),
    { ssr: false }
)

export const Portfolio = ({ title, slug }) => {
    const observer = useRef()
    const inView = useInViewport({ trigger: observer })

    return (
        <FadeSection
            id={slug}
            ref={observer}
            inView={inView}
            animationTime={700}
            translate={[0, "20vh"]}
        >
            <div className="content">
                {inView && <Title>{title}</Title>}
                {inView && <LazyPortfolio />}
            </div>
        </FadeSection>
    )
}
