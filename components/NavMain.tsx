// Next
import Image from "next/image"
import KapotLogo from "./../public/images/logo--white.svg"

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
  font-size: 32px;
  text-transform: uppercase;
`
const NavMain = () => {
  return (
    <Navbar>
      <Logo>
        <Image src={KapotLogo} alt="Logo" height={150} />
      </Logo>
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
    </Navbar>
  )
}

export default NavMain
