import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button, Typography, Grid, styled } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

const SlideContent = styled("div")`
  position: relative;
  padding: 0;
  width: 100%;
  height: 100%;
`

const SlideImage = styled(Image)`
  object-fit: cover;
  transition: opacity 1.4s ease-out;
`

const Overlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

const SlideBody = styled("div")`
  position: absolute;
  right: 7%;
  bottom: 10%;
  z-index: 1;
  width: 40%;
  max-width: 700px;
`

const SlideCaption = styled(Typography)`
  text-transform: uppercase;
  color: #fff;
  transition: opacity 0.4s ease-out;
`

interface Slide {
  imageUrl: string
  imageAlt: string
  caption: string
  ctaUrl: string
  ctaCopy: string
}

interface ImageSliderProps {
  slides: Slide[]
}

const ImageSlider = (props: ImageSliderProps) => {
  const { slides } = props
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [slides.length])

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000)
    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, [currentSlideIndex, nextSlide])

  return (
    <>
      <SlideContent>
        {slides.map((slide, index) => (
          <>
            <SlideImage
              key={index}
              src={slide.imageUrl}
              alt={slide.imageAlt}
              layout="fill"
              style={{ opacity: index === currentSlideIndex ? 1 : 0 }}
            />
            <SlideBody>
              <SlideCaption variant="h3" style={{ opacity: index === currentSlideIndex ? 1 : 0 }}>
                {slide.caption}
              </SlideCaption>
              <Button
                href={slide.ctaUrl}
                variant="contained"
                size="large"
                style={{ opacity: index === currentSlideIndex ? 1 : 0 }}
              >
                {slide.ctaCopy}
              </Button>
            </SlideBody>
          </>
        ))}
        <Overlay></Overlay>
      </SlideContent>
      <Grid container justifyContent="center">
        <Grid item>
          <Button onClick={prevSlide} startIcon={<ArrowBack />} variant="outlined" color="primary">
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={nextSlide} endIcon={<ArrowForward />} variant="outlined" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ImageSlider
