// Modules
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const VideoPlayer = () => {
  const cloudinaryMp4URL = 'https://res.cloudinary.com/hardcodepunk/video/upload/v1701940586/cw2egrtiegzaljg3347k.mp4'
  const cloudinaryWebmURL = 'https://res.cloudinary.com/hardcodepunk/video/upload/v1701949596/zfrqvj08czjna2zaupf8.webm'
  return <ReactPlayer playing muted playsinline loop url={[cloudinaryMp4URL, cloudinaryWebmURL]} width="100%" height="auto" />
}

export default VideoPlayer
