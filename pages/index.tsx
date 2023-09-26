import React from "react"
import ImageSlider from "../components/ImageSlider"

const images = [
  "https://via.placeholder.com/800x600/ff0000",
  "https://via.placeholder.com/800x600/00ff00",
  "https://via.placeholder.com/800x600/0000ff",
]

// MUI
import { styled } from "@mui/material"

export const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`

function Home() {
  return (
    <Container>
      <ImageSlider images={images} />
    </Container>
  )
}

export default Home
