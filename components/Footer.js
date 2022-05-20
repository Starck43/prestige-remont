import React, {useState} from "react"
import { SubTitle, Title } from "./UI/title"
import Container from "./UI/container"
import parse from "html-react-parser"
import { Button } from "react-bootstrap"
import ContactModal from "./ContactForm"



const Footer = ({ title, slug, content }) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <section id={slug}>
      <Container className="flex-column center">
        <Title>{title}</Title>
        <SubTitle className="contacts-block">{parse(content)}</SubTitle>
        <Button variant="outline-primary mt-3"
          className="main-button rounded-pill"
          onClick={() => setModalShow(true)}
        >
          Оставить сообщение
        </Button>

        {modalShow && <ContactModal show={modalShow} onHide={() => setModalShow(false)} />}
      </Container>
    </section>
  )
}

export default Footer
