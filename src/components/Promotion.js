import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Fade from "react-reveal/Fade"


const Promotion = () => {
	const query = useStaticQuery(graphql`
		{
			wpPage(slug: {eq: "promotion"}) {
				id
				title
				content
			}
		}
	`)
	return (
		<section id="promotion">
			<div className="container">

				<Fade bottom cascade>
					<h1>{query.wpPage.title}</h1>
				</Fade>

				<Fade>
					{parse(query.wpPage.content)}
				</Fade>

			</div>
		</section>
	)
}

export default Promotion
