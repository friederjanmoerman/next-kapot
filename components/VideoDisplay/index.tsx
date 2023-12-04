import { ContainerVideo, Emphasis, Overlay, Video, VideoBody, VideoCaption } from './styles'

const VideoDisplay = () => {
  return (
    <ContainerVideo>
      <Video autoPlay muted loop>
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
        </VideoCaption>
      </VideoBody>
    </ContainerVideo>
  )
}

export default VideoDisplay
