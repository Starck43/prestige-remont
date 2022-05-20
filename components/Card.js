import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "react-bootstrap"
import { srcSet2Obj } from "../core/helpers/utils"
import Image from "next/image"
import { getPost } from "../core/api"
import parse from "html-react-parser"
import ModalBox from "./Modal"

const Card = ({ id, title, excerpt, featuredImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const srcSet = srcSet2Obj(featuredImage?.node.srcSet)
  const [showModal, setShowModal] = useState(false)
  const [loadedImages, setLoadedImages] = useState([])


  const openSlider = async e => {
    e.preventDefault()
    let id = e.target.parentNode.parentNode.dataset.id
    setShowModal(!showModal)

    if (!loadedImages.length) {
      const post = await getPost(id)
      let images = []
      if (post) {
        const options = {
          replace: domNode => {
            if (domNode.name === "img") {
              images.push(domNode.attribs)
            }
          },
        }
        parse(post.content, options)
        setLoadedImages(images)
        // console.log("parsed images", images)
      }
    }
  }

  const remoteLoader = ({ src, width }) => {
    let curKey = Object.keys(srcSet).find(key => key === width + "w")
    return srcSet[curKey] || src
  }

  return (
    <div data-id={id} className="card img-wrapper">
      <Image
        src={featuredImage?.node.sourceUrl}
        loader={remoteLoader}
        alt={featuredImage?.node.altText}
        layout="responsive"
        objectFit="cover"
        width={16}
        height={9}
        className={`${imageLoaded ? "visible" : ""}`}
        onLoadingComplete={() => setImageLoaded(true)}
      />
      <div className="content">
        <h3 className="header">{title}</h3>
        <p className="text" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Button
          variant="outline-primary"
          className="rounded-pill mt-2"
          onClick={openSlider}
        >
          Перейти
        </Button>
      </div>
      {showModal && (
        <ModalBox
          show={showModal}
          handleClose={() => setShowModal(false)}
          body={loadedImages}
        />
      )}
    </div>
  )
}

export default Card
