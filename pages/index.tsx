// Modules
import { createRef, memo, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Components
// Above the fold
import NavBar from '../components/NavBar'
import VideoDisplay from '../components/VideoDisplay'
// Lazy loaded
const SectionLearn = dynamic(() => import('../components/Sections/SectionLearn'))
const SectionEvents = dynamic(() => import('../components/Sections/SectionEvents'))
const SectionCollab = dynamic(() => import('../components/Sections/SectionCollab'))
const Footer = dynamic(() => import('../components/Sections/SectionFooter'))

const slides = [
  {
    imageUrl: '/../public/images/splash_kapot-contest.jpg',
    imageAlt: 'Slide 1',
    caption: 'Now playing, aftermovie Kapot Contest XVII.',
    ctaUrl: 'https://www.youtube.com/watch?v=k5GdpZM3xCc',
    ctaCopy: 'Watch now',
  },
  {
    imageUrl: '/../public/images/splash_learn-to-skate.jpg',
    imageAlt: 'Slide 2',
    caption: 'Learn to inline skate.',
    ctaUrl: '#',
    ctaCopy: 'Enroll',
  },
]

const routes = [
  {
    anchor: 'learn',
    title: 'Learn',
    linkRef: createRef<HTMLDivElement>(),
  },
  {
    anchor: 'events',
    title: 'Events',
    linkRef: createRef<HTMLDivElement>(),
  },
  {
    anchor: 'contact',
    title: 'Contact',
    linkRef: createRef<HTMLDivElement>(),
  },
]

const Home = () => {
  const router = useRouter()
  const path = router.asPath

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.href
    event.preventDefault()

    routes?.map((el) => {
      if (href.includes(el?.anchor)) {
        el?.linkRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  useEffect(() => {
    if (path?.length > 2) {
      routes?.map((el) => {
        router.asPath.includes(el?.anchor) && el?.linkRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [path, router.asPath])

  return (
    <>
      <NavBar routes={routes} handleScrollTo={handleScrollTo} />
      <VideoDisplay routes={routes} handleScrollTo={handleScrollTo} />
      <SectionLearn ref={routes[0].linkRef} />
      <SectionEvents ref={routes[1].linkRef} />
      <SectionCollab />
      <Footer ref={routes[2].linkRef} />
    </>
  )
}

export default memo(Home)
