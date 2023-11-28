import { Typography, TypographyProps, styled } from '@mui/material'

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

export const VideoBody = styled('div')(
  ({ theme }) => `
  && {
    position: absolute;
    right: 7%;
    bottom: 10%;
    z-index: 1;
    max-width: 600px;

    ${theme.breakpoints.down('lg')} {
      right: auto;
      left: 7%;
    }
  `,
)

export const VideoCaption = styled(Typography)(
  ({ theme }) => `
  && {
    color: #fff;
    transition: opacity 0.4s ease-out;
    font-size: 42px;
    line-height: 52px;
  `,
)

export const Emphasis = styled(Typography)<TypographyProps>(
  ({ theme }) => `
      && {
        font-size: 47px;
        letter-spacing: 2px;
        vertical-align: bottom;
        color: ${theme.palette.primary.main};
      }
    `,
)
