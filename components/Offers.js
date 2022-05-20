import React, { useContext } from "react"
import parse from "html-react-parser"
import { useInView } from "react-cool-inview"

import {
  Accordion,
  Card,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap"

import { Title } from "./UI/title"
import Container from "./UI/container"
import { FadeSection } from "./UI/section"

/*const parseOptions = {

	replace: node => {
			if (!node.data) return;

			var text = node.data.replace(/\n/g, '')
			if (!text) {
				return (<React.Fragment />)
			}

	},

}*/

const Offers = ({ title, slug, content }) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 0px",
  })

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

  {
    parse(content, options)
  }

  // add class Active to header on click
  function AccordionToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext)
    const handleClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    )

    return (
      <Card.Header
        className={eventKey === activeEventKey ? "active" : ""}
        onClick={handleClick}
      >
        {children}
      </Card.Header>
    )
  }

  return (
    <FadeSection ref={observe} inView={inView} id={slug}>
      <Container>
        <article className="content">
          {inView && <Title>{title}</Title>}
          <Accordion as="ul">
            {offersList.map((offer, index) => (
              <li key={`offer-${index}`}>
                <AccordionToggle
                  as={Card.Header}
                  variant="link"
                  eventKey={index + 1}
                >
                  {offer.data}
                </AccordionToggle>
                <Accordion.Collapse
                  className="card-detail"
                  eventKey={index + 1}
                >
                  <Card.Body as="p">
                    {offer?.children?.data ? offer.children.data : ""}
                  </Card.Body>
                </Accordion.Collapse>
              </li>
            ))}
          </Accordion>
          {/*parse(query.wpPage.content, { trim: true })*/}
        </article>
      </Container>
    </FadeSection>
  )
}

export default Offers
