// React
import React from "react"

// Components
import ImageSlider from "../components/ImageSlider"

const images = ["/images/splash.jpg"]

const Home: React.FC = () => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  )
}

export default Home
