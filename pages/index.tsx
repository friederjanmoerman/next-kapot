// Modules
import { createRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Components
const NavBar = dynamic(() => import('../components/NavBar'), { ssr: false })
import VideoDisplay from '../components/VideoDisplay'

const SectionLearn = dynamic(() => import('../components/Sections/SectionLearn/WrappedSectionLearn'), { ssr: false })
const SectionEvents = dynamic(() => import('../components/Sections/SectionEvents/WrappedSectionEvents'), { ssr: false })
const SectionCollab = dynamic(() => import('../components/Sections/SectionCollab'), { ssr: false })
const Footer = dynamic(() => import('../components/Sections/SectionFooter/WrappedSectionFooter'), { ssr: false })

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
      <SectionLearn sectionLearnRef={routes[0].linkRef} />
      <SectionEvents sectionEventsRef={routes[1].linkRef} />
      <SectionCollab></SectionCollab>
      <Footer sectionFooterRef={routes[2].linkRef} />
    </>
  )
}

export default Home
