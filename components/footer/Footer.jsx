import React, { memo, useState } from "react"
import parse from "html-react-parser"

import Button from "@mui/material/Button"
import { SubTitle, Title } from "/components/UI/title"
import { Container } from "/components/UI/Container"
import { ContactForm } from "/components/contactForm/ContactForm"

export const Footer = memo(({ title, slug, content }) => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <section id={slug}>
            <Container className="flex-column center">
                <Title>{title}</Title>
                <SubTitle className="contacts-block">{parse(content)}</SubTitle>
                <Button
                    variant="outlined"
                    sx={{ borderRadius: "1px" }}
                    onClick={() => setModalShow(true)}
                >
                    Оставить сообщение
                </Button>

                {modalShow && (
                    <ContactForm
                        open={modalShow}
                        onCloseHandler={() => setModalShow(false)}
                    />
                )}
            </Container>
        </section>
    )
})
