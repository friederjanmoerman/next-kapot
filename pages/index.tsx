// React
import React from "react"

// Components
import NavMain from "../components/NavMain"
import ImageSlider from "../components/ImageSlider"

// MUI
import { Container } from "@mui/material"

const images = ["/../public/images/splash-1.jpg", "/../public/images/splash-2.jpg"] // Images array for ImageSlider

function Home() {
  return (
    <>
      <NavMain />
      <Container>
        <ImageSlider images={images} />
      </Container>
    </>
  )
}

export default Home
