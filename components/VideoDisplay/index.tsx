const VideoDisplay = () => {
  return (
    <div className="video-display">
      <video autoPlay muted loop className="video">
        <source src="/videos/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoDisplay
