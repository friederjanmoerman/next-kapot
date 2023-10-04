// MUI
import { styled } from "@mui/material"
import Grid from "@mui/material/Grid"

// Next
import Image from "next/image"

export const Section = styled(Grid)`
  position: relative;
  background: #000;
  padding: 180px 14% 380px;
`

export const StyledSplashIllustration = styled(Image)`
  position: absolute;
  left: 0;
  bottom: 20%;
  z-index: 8000;
`
