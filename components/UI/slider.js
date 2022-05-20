import React, { Fragment } from "react"

import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { srcSet2Obj } from "../../core/helpers/utils"

const Slider = ({ sliders }) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      emulateTouch={true}
      useKeyboardArrows
      preventMovementUntilSwipeScrollTolerance={true}
      labels={{ leftArrow: "Назад", rightArrow: "Вперед", item: "Слайд" }}
      statusFormatter={(current, total) => `${current} / ${total}`}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <div
            className={"arrow left"}
            onClick={onClickHandler}
            title={label}
          />
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <div
            className={"arrow right"}
            onClick={onClickHandler}
            title={label}
          />
        )
      }
    >
      {sliders.map(createCarouselItem)}
    </Carousel>
  )
}

const createCarouselItem = (obj, options = {}) => {
  let srcSet = srcSet2Obj(obj.srcset)
  const remoteLoader = ({ src, width }) => {
    let curKey = Object.keys(srcSet).find(key => key === width + "w")
    return srcSet[curKey] || src
  }

  return (
    <Image
      key={obj["data-id"]}
      loader={remoteLoader}
      src={obj["data-full-url"]}
      //srcSet={obj.srcset}
      alt={obj.alt}
      layout="fill"
      objectFit="contain"
      quality={80}
      width={obj.width}
      height={obj.height}
      //blurDataURL={srcSet["320w"]}
      //placeholder="blur"
    />
  )
}

export default Slider
