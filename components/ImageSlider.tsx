import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button, Typography, Grid, styled } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

const SlideCard = styled("div")`
  height: 100%;
  width: 100%;
`

const SlideContent = styled("div")`
  position: relative;
  padding: 0;
  width: 100%;
  height: 100%;
`

const ImageContainer = styled("div")`
  position: relative;
  height: 100%;
  width: 100%;
`

const SlideImage = styled(Image)`
  object-fit: cover;
  transition: opacity 0.7s ease-out;
`

const Overlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

const SlideCaption = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

interface Slide {
  imageUrl: string
  imageAlt: string
  caption: string
  ctaUrl?: string
  ctaCopy?: string
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
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [currentSlideIndex, nextSlide])

  return (
    <SlideCard>
      <SlideContent>
        <ImageContainer>
          {slides.map((slide, index) => (
            <>
              <SlideImage
                key={index}
                src={slide.imageUrl}
                alt={slide.imageAlt}
                layout="fill"
                style={{ opacity: index === currentSlideIndex ? 1 : 0 }}
              />
              <SlideCaption variant="h3">{slide.caption}</SlideCaption>
            </>
          ))}
          <Overlay></Overlay>
        </ImageContainer>
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
      </SlideContent>
    </SlideCard>
  )
}

export default ImageSlider
