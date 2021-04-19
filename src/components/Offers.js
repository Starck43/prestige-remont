import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"


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
			wpPage(slug: {eq: "offers"}) {
				id
				title
				content
			}
		}
	`)
	return (
		<section id="offers">
			<div className="offers-container">

				<Fade bottom cascade>
					<h1>{query.wpPage.title}</h1>
				</Fade>

				<div className="content">
					{parse(query.wpPage.content, { trim: true })}
				</div>

			</div>
		</section>
	)
}

export default Offers
