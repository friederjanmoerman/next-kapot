// React
import { useState } from "react"

// Material UI
import { Button, Container, Grid, Paper } from "@mui/material"

// Next
import Image from "next/image"

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + images.length) % images.length)
  }

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ overflow: "hidden" }}>
        <Grid
          container
          style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 0.5s ease-in-out" }}
        >
          {images.map((image, index) => (
            <Grid item key={index} xs={12}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={1920} // Set the desired width
                height={1080} // Set the desired height
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Button variant="contained" color="primary" onClick={prevSlide} style={{ marginTop: "1rem" }}>
        Previous
      </Button>
      <Button variant="contained" color="primary" onClick={nextSlide} style={{ marginTop: "1rem", marginLeft: "1rem" }}>
        Next
      </Button>
    </Container>
  )
}

export default ImageSlider
