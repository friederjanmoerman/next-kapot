// React
import React from "react"

// Components
import NavMain from "../components/NavMain"
import ImageSlider from "../components/ImageSlider"
import SectionLearn from "../components/Section/SectionLearn"
import SectionEvents from "../components/Section/SectionEvents"
import Footer from "../components/Section/SectionFooter"

const slides = [
  {
    imageUrl: "/../public/images/splash_kapot-contest.jpg",
    imageAlt: "Slide 1",
    caption: "Now playing, aftermovie Kapot Contest XVII.",
    ctaUrl: "https://www.youtube.com/watch?v=k5GdpZM3xCc",
    ctaCopy: "Watch now",
  },
  {
    imageUrl: "/../public/images/splash_learn-to-skate.jpg",
    imageAlt: "Slide 2",
    caption: "Learn to inline skate.",
    ctaUrl: "#",
    ctaCopy: "Enroll",
  },
]

function Home() {
  return (
    <>
      <NavMain />
      <ImageSlider slides={slides} />
      <SectionLearn />
      <SectionEvents />
      <Footer />
    </>
  )
}

export default Home
