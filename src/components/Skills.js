//import starIcon from "../images/svg/star.svg"

import React, {useEffect} from "react"
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

const Skills = () => {

	useEffect(() => {
		const skills = document.querySelectorAll('.skills-grid >*')
	 // console.log(skills)
		skills.forEach( (item) => {
			var wrapper = item
			if (item.localName === 'p') {
				wrapper = document.createElement('div');
				wrapper.className = 'skill';
				item.parentNode.insertBefore(wrapper, item);
				wrapper.appendChild(item);
				item.removeAttribute('class')
			}
			if (wrapper.firstChild) {
				wrapper.id = wrapper.firstChild.id
				wrapper.firstChild.id = ''
				let iconName = wrapper.id
				if (iconName) {
					iconName = iconName.replace('Icon','')
					console.log(iconName)
					var img = document.createElement('img')
					img.src = `/icons/${iconName}.svg`
					wrapper.prepend(img)
				}
			}

		})
	})

	const query = useStaticQuery(graphql`
		{
			wpPage(slug: {eq: "skills"}) {
				id
				title
				content
			}
		}
	`)
	return (
		<section id="skills">
			<div className="skills-wrapper">

				<Fade bottom cascade>
					<h1>{query.wpPage.title}</h1>
				</Fade>

				<div className="skills-grid">
					{parse(query.wpPage.content, { trim: true })}
				</div>

			</div>
		</section>
	)
}

export default Skills
