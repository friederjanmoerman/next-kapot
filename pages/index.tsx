// React
import React from "react"

// Components
import NavMain from "../components/NavMain"
import ImageSlider from "../components/ImageSlider"

const slides = [
  {
    imageUrl: "/../public/images/splash-1.jpg",
    imageAlt: "Slide 1",
    caption: "Now playing, aftermovie Kapot Contest XVII.",
  },
  {
    imageUrl: "/../public/images/splash-2.jpg",
    imageAlt: "Slide 2",
    caption: "Learn to inline skate.",
  },
]

function Home() {
  return (
    <>
      <NavMain />
      <ImageSlider slides={slides} />
    </>
  )
}

export default Home
