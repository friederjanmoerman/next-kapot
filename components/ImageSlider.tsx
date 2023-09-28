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
  color: white;
  z-index: 1;
`

interface ImageSliderProps {
  images: string[]
  captions: string[]
}

const ImageSlider = (props: ImageSliderProps) => {
  const { images, captions } = props
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(nextImage, 4000) // Transition every 4 seconds
    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, [currentImageIndex, nextImage])

  return (
    <SlideCard>
      <SlideContent>
        <ImageContainer>
          {images.map((image, index) => (
            <SlideImage
              key={image}
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }} // Set opacity based on the current image
            />
          ))}
          <Overlay></Overlay>
          <SlideCaption variant="h6" align="center">
            {captions[currentImageIndex]}
          </SlideCaption>
        </ImageContainer>
        <Grid container justifyContent="center">
          <Grid item>
            <Button onClick={prevImage} startIcon={<ArrowBack />} variant="outlined" color="primary">
              Previous
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={nextImage} endIcon={<ArrowForward />} variant="outlined" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </SlideContent>
    </SlideCard>
  )
}

export default ImageSlider
