// React
import { memo } from 'react'

// Next
import Image from 'next/image'

// Images
import SplashIllustration from './../public/images/illustrations/paint-splash-1.svg'
import Logo from './icons/Logo'

// MUI
import { styled } from '@mui/material'

// Types
import { INavbar } from './types'

// Components
import ButtonScrollTo from './ButtonScrollTo/Index'

// Images
import KapotLogo from './../public/images/illustrations/logo--white.svg'

const Navbar = styled('nav')`
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

const Menu = styled('ul')`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 70px;
  position: relative;
  z-index: 9002;
`

const MenuItem = styled('li')`
  font-size: 32px;
  text-transform: uppercase;
`

const NavBar = (props: INavbar) => {
  const { routes, handleScrollTo } = props
  return (
    <Navbar>
      <Logo src={KapotLogo} height={150} alt={'Kapot logo'} />
      <Menu>
        {routes.map((page) => (
          <MenuItem key={page.title}>
            <ButtonScrollTo handleScrollTo={handleScrollTo} location={'#' + page.anchor} label={page.title}></ButtonScrollTo>
          </MenuItem>
        ))}
      </Menu>
      <StyledSplashIllustration src={SplashIllustration} alt="Splash illustration" width={550} />
    </Navbar>
  )
}

export default memo(NavBar)
