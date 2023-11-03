import { styled } from '@mui/material'

export const ContainerVideo = styled('div')`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`

export const Video = styled('video')`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const Overlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`
