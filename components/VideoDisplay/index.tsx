import { ContainerVideo, Overlay, Video } from './styles'

const VideoDisplay = () => {
  return (
    <ContainerVideo>
      <Video autoPlay muted loop>
        <source src="/videos/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Overlay></Overlay>
    </ContainerVideo>
  )
}

export default VideoDisplay
