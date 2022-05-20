import React from "react"
import axios from "axios"
import { Modal, Form, Button, Col, Spinner } from "react-bootstrap"

class ContactModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeOverlay: false,
      handleOverlay: this.handleOverlay.bind(this),
    }
  }

  handleOverlay = status => {
    this.setState({
      activeOverlay: status,
    })
  }

  render() {
    return (
          <Modal
            {...this.props}
            aria-labelledby="contained-modal-title-vcenter"
            scrollable={false}
            centered
            size="lg"
            dialogClassName="contact-dialog mt-3"
          >
            <div
              className={
                "modal-overlay" + (this.state.activeOverlay ? " active" : "")
              }
            >
              <div className="container">
                <Spinner
                  as="span"
                  animation="border"
                  size="lg"
                  role="status"
                  aria-hidden={true}
                />
              </div>
            </div>

            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Обратная связь
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ContactForm
                {...this.props}
                showOverlay={this.state.handleOverlay}
              />
            </Modal.Body>
          </Modal>
    )
  }
}

class ContactForm extends ContactModal {
  constructor(props) {
    super(props)
    this.state = {
      message: { email: "", name: "", body: "" },
      submitted: false,
      alertMessage: "",
      alertStatus: "hidden",
      validated: false,
    }
  }

  onChange = e => {
    const name = e.target.getAttribute("name") //получим имя текущего элемента формы
    this.setState({
      message: { ...this.state.message, [name]: e.target.value },
      submitted: false,
    })
  }

  successResponse = msg => {
    this.setState({
      alertStatus: "success",
      submitted: true,
      validated: false,
      message: { email: "", name: "", body: "" },
    })
    if (msg) this.setState({ alertMessage: msg })
  }

  failResponse = msg => {
    this.setState({
      alertStatus: "danger",
      submitted: false,
    })
    if (msg) this.setState({ alertMessage: msg })
  }

  handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    // если форма заполнена, то отправим запрос на сервер
    const form = e.currentTarget
    if (form.checkValidity() === true) {
      this.props.showOverlay(true)
      this.sendAjaxRequest()
      this.setState({ submitted: true })
    } else {
      this.failResponse("Необходимо заполнить все поля формы!")
    }
    //Разрешим валидацию формы для выделения незаполненных полей при попытке отправить сообщение
    this.setState({ validated: true })
  }

  sendAjaxRequest = () => {
    axios({
      method: "POST",
      url: process.env.SERVER + process.env.API_ENDPOINTS.sendMessage,
      data: this.state.message,
    }).then(response => {
      response.status === 200
        ? this.successResponse(response.data.message)
        : this.failResponse(response.data.message)
      this.props.showOverlay(false)
    })
  }

  render() {
    return (
      <Form
        className="ContactForm"
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
        method="POST"
      >
        <Form.Group controlId="nameControl" className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={this.state.message.name}
            onChange={this.onChange}
            required
            size="lg"
          />
        </Form.Group>

        <Form.Group controlId="emailControl" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={this.state.message.email}
            onChange={this.onChange}
            required
            size="lg"
          />
        </Form.Group>

        <Form.Group controlId="bodyControl" className="mb-3">
          <Form.Control
            as="textarea"
            rows={5}
            name="body"
            placeholder="Сообщите контактные данные для обратной связи..."
            value={this.state.message.body}
            onChange={this.onChange}
            required
            size="lg"
          />
        </Form.Group>

        <div className={"alert alert-" + this.state.alertStatus}>
          <p>{this.state.alertMessage}</p>
        </div>

        <Form.Group className="mt-3">
          <Button
            variant={this.state.submitted ? "outline-primary" : "primary"}
            type="submit"
            disabled={this.state.submitted}
            size="lg"
            className="rounded-pill"
          >
            Отправить
          </Button>
          <Button
            variant={!this.state.submitted ? "outline-primary" : "primary"}
            type="button"
            size="lg"
            onClick={this.props.onHide}
            className="rounded-pill"
          >
            Отмена
          </Button>
        </Form.Group>
      </Form>
    )
  }
}

export default ContactModal
