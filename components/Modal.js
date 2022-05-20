import React from "react"
import { CloseButton, Modal } from "react-bootstrap"
import Slider from "./UI/slider"

const ModalBox = ({ show, handleClose, body = [] }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered={true}
      fullscreen={true}
      scrollable={false}
      contentClassName="carousel-content"
      dialogClassName="carousel-modal"
    >
      <Modal.Body>{body.length && <Slider sliders={body} />}</Modal.Body>
      <CloseButton variant="white" onClick={handleClose} />
    </Modal>
  )
}

export default ModalBox
