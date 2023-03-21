import React, { useEffect, useRef, useState } from "react"
import parse from "html-react-parser"

import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"

import { AnimationText } from "/components/UI/animation/AnimationText"
import { Container } from "/components/UI/Container"
import { FadeSection } from "/components/UI/animation/FadeSection"
import { useInViewport } from "/core/hooks/useInViewport"

/*
const parseOptions = {
	replace: node => {
			if (!node.data) return;

			var text = node.data.replace(/\n/g, '')
			if (!text) {
				return (<React.Fragment />)
			}

	},
}
*/

export const Offers = ({ title, slug, content }) => {
    const [offers, setOffers] = useState([])
    const observer = useRef()
    const inView = useInViewport({ trigger: observer })

    useEffect(() => {
        const offersList = []
        const options = {
            replace: domNode => {
                if (
                    domNode.name === "h2" ||
                    domNode.name === "h3" ||
                    domNode.name === "li"
                ) {
                    offersList.push(domNode.children[0])
                }

                if (
                    offersList.length > 0 &&
                    domNode.name === "p" &&
                    domNode.children[0].data
                ) {
                    let el = offersList[Object.keys(offersList).length - 1]
                    offersList[Object.keys(offersList).length - 1] = {
                        ...el,
                        children: domNode.children[0],
                    }
                }
            },
            trim: true,
        }

        parse(content, options)
        setOffers(offersList)
    }, [content])

    return (
        <FadeSection
            id={slug}
            ref={observer}
            inView={inView}
            animationTime={700}
            translate={[0, "20vh"]}
        >
            <Container>
                <article className="content">
                    {
                        <AnimationText Tag="h2" show={inView}>
                            {title}
                        </AnimationText>
                    }
                    {offers.map((offer, index) => (
                        <FadeSection
                            Tag={Accordion}
                            animationTime={900}
                            animationDelay={900 + index * 500}
                            translate={["30%", 0]}
                            inView={inView}
                            key={`offer-${index}`}
                            className="accordion"
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ArrowForwardIosSharpIcon color="primary" />
                                }
                                id={`panel${index + 1}-header`}
                                className="accordion-header"
                            >
                                {offer.data}
                            </AccordionSummary>
                            <AccordionDetails className="accordion-details">
                                <p>
                                    {offer?.children?.data
                                        ? offer.children.data
                                        : ""}
                                </p>
                            </AccordionDetails>
                        </FadeSection>
                    ))}
                </article>
            </Container>
        </FadeSection>
    )
}
