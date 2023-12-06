import ButtonScrollTo from '../ButtonScrollTo/Index'

import { ContainerVideo, Emphasis, Overlay, Video, VideoBody, VideoCaption } from './styles'

import { IVideoDisplay } from './types'

const VideoDisplay = (props: IVideoDisplay) => {
  const { handleScrollTo, routes } = props
  return (
    <ContainerVideo>
      <Video autoPlay muted loop playsInline>
        <source src="/videos/example.mp4" type="video/mp4" />
        <source src="/videos/example.webm" type="video/webm" />
        Your browser does not support the video tag.
      </Video>
      <Overlay></Overlay>
      <VideoBody>
        <VideoCaption variant="h3">
          Events and coaching all ages.<br></br>By and for the{' '}
          <Emphasis variant="h1" component="span">
            {' '}
            inline skate{' '}
          </Emphasis>
          community.
          {routes.map((r, i) => {
            if (i === 0) {
              return <ButtonScrollTo key={r.title} handleScrollTo={handleScrollTo} location={'#' + r.anchor} label="Learn to skate"></ButtonScrollTo>
            }
            return null
          })}
        </VideoCaption>
      </VideoBody>
    </ContainerVideo>
  )
}

export default VideoDisplay
