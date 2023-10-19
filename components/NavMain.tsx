// Next
import Image from "next/image"

// Images
import SplashIllustration from "./../public/images/illustrations/paint-splash-1.svg"
import Logo from "./Icons/Logo"

// MUI
import { Typography, styled } from "@mui/material"

const Navbar = styled("nav")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  position: absolute;
  z-index: 9000;
  padding: 45px 7%;
`

const StyledSplashIllustration = styled(Image)`
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 9001;
`

const Menu = styled("ul")`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 70px;
  position: relative;
  z-index: 9002;
`

const MenuItem = styled("li")`
  font-size: 32px;
  text-transform: uppercase;
`

const NavMain = () => {
  return (
    <Navbar>
      <Logo />
      <Menu>
        <MenuItem>
          <Typography variant="h2">Learn</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h2">Events</Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="h2">Contact</Typography>
        </MenuItem>
      </Menu>
      <StyledSplashIllustration src={SplashIllustration} alt="Splash illustration" width={550} />
    </Navbar>
  )
}

export default NavMain
