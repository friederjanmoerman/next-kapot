// React
import React from "react"

// Next
import Image from "next/image"

// Components
import ImageSlider from "../components/ImageSlider"

import KapotLogo from "./../public/images/logo--white.svg"

// MUI
import { Container, styled } from "@mui/material"

const Navbar = styled("nav")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  position: absolute;
  z-index: 9000;
`

const Logo = styled("div")`
  flex: 1;
  margin: 40px 80px;
`

const Menu = styled("ul")`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

const MenuItem = styled("li")`
  font-size: 62px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "FuturaStdExtraBoldOblique", sans-serif;
`

const images = ["/../public/images/splash-1.jpg", "/../public/images/splash-2.jpg"] // Images array for ImageSlider

function Home() {
  return (
    <>
      <Navbar>
        <Logo>
          <Image src={KapotLogo} alt="Logo" height={150} />
        </Logo>
        <Menu>
          <MenuItem>Learn</MenuItem>
          <MenuItem>Events</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Navbar>
      <Container>
        <ImageSlider images={images} />
      </Container>
    </>
  )
}

export default Home
