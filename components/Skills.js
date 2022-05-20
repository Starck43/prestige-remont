import React, { useEffect } from "react"
import parse from "html-react-parser"
import { FadeSection } from "./UI/section"
import { Title } from "./UI/title"
import Container from "./UI/container"
import { useInView } from "react-cool-inview"
//import Fade from "react-reveal/Fade"

/*const parseOptions = {

	replace: node => {
			if (!node.data) return;

			var text = node.data.replace(/\n/g, '')
			if (!text) {
				return (<React.Fragment />)
			}

	},

}*/

const Skills = ({ title, content }) => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 0px",
  })

  useEffect(() => {
    const skills = document.querySelectorAll(".grid >*")
    // console.log(skills)
    skills.forEach(item => {
      let wrapper = item
      if (item.localName === "p") {
        wrapper = document.createElement("div")
        wrapper.className = "skill centered"
        item.parentNode.insertBefore(wrapper, item)
        wrapper.appendChild(item)
        item.removeAttribute("class")
      }
      if (wrapper.firstChild) {
        wrapper.id = wrapper.firstChild.id
        wrapper.firstChild.id = ""
        let iconName = wrapper.id
        if (iconName) {
          iconName = iconName.replace("Icon", "")
          let img = document.createElement("img")
          let svgObject = require(`/public/icons/${iconName}.svg`)
          img.src = svgObject.default.src
          wrapper.prepend(img)
        }
      }
    })
  }, [])

  return (
    <FadeSection ref={observe} inView={inView} id="skills">
      <Container>
        <article className="content">
          {inView && <Title>{title}</Title>}

          <div className="grid">{parse(content, { trim: true })}</div>
        </article>
      </Container>
    </FadeSection>
  )
}

export default Skills
