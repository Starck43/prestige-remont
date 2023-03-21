import React, { useRef, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Pagination, Parallax, Zoom } from "swiper"

import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import "swiper/css/parallax"

import { useWindowDimensions } from "/core/hooks/useWindowDimensions"
import { classnames, srcSet2Array } from "/core/helpers/utils"
import Arrow from "./chervon.svg"

import cls from "./Slider.module.sass"

export const Slider = ({
    title,
    slides = [],
    currentIndex = 0,
    slideInterval = 0,
    duration = 900,
    infinite = true,
    direction = "horizontal",
    autoHeight = false,
    centered = false,
    responsive = null,
    effect = "slide",
    paginationType = "bullets",
    preload = false,
    zoom = true,
    parallax = true,
    label = "lightbox",
    style = {},
    children = null,
}) => {
    const [activeSlide, setActiveSlide] = useState(currentIndex + 1)
    const carouselRef = useRef()
    const { width } = useWindowDimensions()

    const handlePrev = () => {
        carouselRef.current?.swiper.slidePrev()
    }

    const handleNext = () => {
        carouselRef.current?.swiper.slideNext()
    }

    return slides?.length > 0 || children ? (
        <div className={classnames(cls, ["slider__container"], {}, [label])}>
            <Swiper
                ref={carouselRef}
                style={style}
                modules={[Pagination, Keyboard, Parallax, Zoom]}
                keyboard
                initialSlide={currentIndex}
                pagination={{
                    enabled: !!paginationType && slides.length > 1,
                    clickable: true,
                    dynamicBullets: true,
                    hideOnClick: false,
                    type: paginationType,
                }}
                lazy={{
                    enabled: !preload,
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                }}
                parallax={parallax}
                zoom={{
                    enabled: zoom,
                    maxRatio: 2.5,
                }}
                effect={effect}
                speed={duration}
                autoplay={{
                    enabled: !!slideInterval,
                    delay: slideInterval,
                }}
                loop={infinite}
                direction={direction}
                breakpoints={responsive}
                centeredSlides={centered}
                grabCursor
                watchOverflow
                autoHeight={autoHeight}
                onPaginationUpdate={swiper =>
                    setActiveSlide(swiper.activeIndex + 1)
                }
            >
                {children
                    ? children
                    : slides.map(slide => {
                          const srcSet = srcSet2Array(slide?.srcSet)
                          return (
                              slide.src && (
                                  <SwiperSlide
                                      className={cls.swiper__slide}
                                      key={slide.id}
                                  >
                                      <span
                                          className={classnames(
                                              cls,
                                              ["swiper__zoom__container"],
                                              {},
                                              ["swiper-zoom-container"]
                                          )}
                                      >
                                          <Image
                                              className={classnames(
                                                  cls,
                                                  ["img"],
                                                  {},
                                                  [
                                                      "swiper-zoom-target",
                                                      "swiper-lazy",
                                                  ]
                                              )}
                                              src={srcSet?.[0] || slide.src}
                                              //src={slide.src}
                                              srcSet={slide.srcset}
                                              alt={slide.alt}
                                              width={slide.width}
                                              height={slide.height}
                                              placeholder
                                              blurDataURL={
                                                  srcSet?.[0] || slide.src
                                              }
                                          />

                                          <div className="swiper-lazy-preloader" />
                                      </span>
                                      {(title || slide.alt) && (
                                          <figcaption
                                              className={cls.slide__caption}
                                          >
                                              <h4
                                                  className={cls.slide__title}
                                                  data-swiper-parallax-opacity="0"
                                                  data-swiper-parallax="-300"
                                                  data-swiper-parallax-duration={
                                                      duration * 1.2
                                                  }
                                              >
                                                  {title}
                                              </h4>
                                              <p
                                                  className={
                                                      cls.slide__subtitle
                                                  }
                                                  data-swiper-parallax-opacity="0"
                                                  data-swiper-parallax="-400"
                                                  data-swiper-parallax-duration={
                                                      duration * 1.5
                                                  }
                                              >
                                                  {slide.alt}
                                              </p>
                                          </figcaption>
                                      )}
                                  </SwiperSlide>
                              )
                          )
                      })}

                {label === "lightbox" && (
                    <div
                        className={classnames(cls, ["swiper__fraction"], {}, [
                            "swiper-fraction",
                        ])}
                    >
                        <span>{activeSlide}</span>/<span>{slides.length}</span>
                    </div>
                )}
            </Swiper>

            {width > 576 ? (
                <>
                    <div
                        className={classnames(
                            cls,
                            [
                                "swiper__control__next",
                                ((!infinite &&
                                    carouselRef.current?.swiper.isEnd) ||
                                    carouselRef.current?.swiper.zoom?.scale >
                                        1) &&
                                    "disabled",
                            ],
                            {},
                            ["controls"]
                        )}
                        role="link"
                        onClick={handleNext}
                    >
                        <Arrow
                            className={classnames(cls, ["arrow", "right"])}
                        />
                    </div>
                    <div
                        className={classnames(
                            cls,
                            [
                                "swiper__control__prev",
                                ((!infinite &&
                                    carouselRef.current?.swiper.isBeginning) ||
                                    carouselRef.current?.swiper.zoom?.scale >
                                        1) &&
                                    "disabled",
                            ],
                            {},
                            ["controls"]
                        )}
                        role="link"
                        onClick={handlePrev}
                    >
                        <Arrow className={classnames(cls, ["arrow", "left"])} />
                    </div>
                </>
            ) : null}
        </div>
    ) : null
}
