// React
import { useState } from "react"
import Image from "next/image"

// Images
import splash1Image from "./../public/images/splash-1.jpg"
import splash2Image from "./../public/images/splash-2.jpg"

// MUI
import { Box, Button, Card, CardContent, Typography, Grid } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material"

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = () => {
  const images = [splash1Image, splash2Image] // Define an array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            src={images[currentImageIndex]} // Use the current image from the array
            alt={`Image ${currentImageIndex + 1}`}
            layout="fill" // Set layout to "fill" for full width
            objectFit="cover"
            // Other props like quality, objectFit, objectPosition, etc. can also be added as needed
          />
        </Box>
        <Typography variant="h6" align="center">
          Image {currentImageIndex + 1} of {images.length}
        </Typography>
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
      </CardContent>
    </Card>
  )
}

export default ImageSlider
