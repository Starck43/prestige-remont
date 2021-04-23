import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"
import { Accordion, Card, AccordionContext } from "react-bootstrap"

/*const parseOptions = {

	replace: node => {
			if (!node.data) return;

			var text = node.data.replace(/\n/g, '')
			if (!text) {
				return (<React.Fragment />)
			}

	},

}*/

const Offers = () => {

	const query = useStaticQuery(graphql`
		{
			wpPage(slug: { eq: "offers" }) {
				id
				title
				content
			}
		}
	`)

	var offersList = []
	const options = {
		replace: domNode => {
			if (domNode.name === "h2" || domNode.name === "h3" || domNode.name === "li") {
				offersList.push(domNode.children[0])
			}
			if (offersList.length>0 && domNode.name === "p" && domNode.children[0].data) {
				var el = offersList[Object.keys(offersList).length-1]
				offersList[Object.keys(offersList).length-1] = {...el, children: domNode.children[0]}
			}
		},
		trim: true,
	}

	parse(query.wpPage.content, options)

	// add class Active to header on click
	function AccordionToggle({...props}) {
	  const currentEventKey = React.useContext(AccordionContext);
	  return <Accordion.Toggle className={props.eventKey === currentEventKey ? 'active' : ''} {...props} />
	}

	return (
		<section id="offers">
			<div className="offers-container">
				<Fade bottom cascade>
					<h1>{query.wpPage.title}</h1>
				</Fade>

				<div className="content">
					<Accordion as="ul">
						{offersList.map((offer, index) => (
							<li key={index}>
								<AccordionToggle as={Card.Header} variant="link" eventKey={index+1}>
									{offer.data}
								</AccordionToggle>
								<Accordion.Collapse className="card-detail" eventKey={index+1}>
									<Card.Body as="p">
										{offer?.children?.data ? offer.children.data : ''}
									</Card.Body>
								</Accordion.Collapse>
							</li>
						))}
					</Accordion>
					{/*parse(query.wpPage.content, { trim: true })*/}
				</div>
			</div>
		</section>
	)
}

export default Offers
