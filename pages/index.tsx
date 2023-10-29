// Modules
import { createRef, memo, useEffect } from "react"

// Components
import NavBar from "../components/NavBar"
import ImageSlider from "../components/ImageSlider"
import SectionLearn from "../components/Sections/SectionLearn"
import SectionEvents from "../components/Sections/SectionEvents"
import Footer from "../components/Sections/SectionFooter"
import { useRouter } from "next/router"

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

const routes = [
  {
    anchor: "learn",
    title: "Learn",
    linkRef: createRef<HTMLDivElement>(),
  },
  {
    anchor: "events",
    title: "Events",
    linkRef: createRef<HTMLDivElement>(),
  },
  {
    anchor: "contact",
    title: "Contact",
    linkRef: createRef<HTMLDivElement>(),
  },
]

const handleScrollTo = () => {
  routes?.map(el => {
    el?.linkRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  })
}

function Home() {
  const router = useRouter()
  const path = router.asPath

  useEffect(() => {
    if (path?.length > 2) {
      routes?.map(el => {
        router.asPath.includes(el?.anchor) &&
          el?.linkRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }, [path, router.asPath])

  return (
    <>
      <NavBar routes={routes} handleScrollTo={handleScrollTo} />
      <ImageSlider slides={slides} />
      <SectionLearn ref={routes[0].linkRef} />
      <SectionEvents ref={routes[1].linkRef} />
      <Footer ref={routes[2].linkRef} />
    </>
  )
}

export default memo(Home)
