// React
import React from "react"

// Components
import NavMain from "../components/NavMain"
import ImageSlider from "../components/ImageSlider"

const images = ["/../public/images/splash-1.jpg", "/../public/images/splash-2.jpg"] // Images array for ImageSlider
const captions = ["Caption one", "Caption two"] // Captions array for ImageSlider

function Home() {
  return (
    <>
      <NavMain />
      <ImageSlider captions={captions} images={images} />
    </>
  )
}

export default Home
