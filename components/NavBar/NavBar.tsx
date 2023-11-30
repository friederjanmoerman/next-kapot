// React
import { memo } from 'react'

// Images
import SplashIllustration from './../../public/images/illustrations/paint-splash-1.svg'

// Types
import { INavbar } from './types'

// Styles
import { StyledNav, Menu, MenuItem, StyledSplashIllustration } from './styles'

// Components
import ButtonScrollTo from './../ButtonScrollTo/Index'
import { LogoKapot } from '../icons/Logo'

// Images

const NavBar = (props: INavbar) => {
  const { routes, handleScrollTo } = props
  return (
    <StyledNav>
      <LogoKapot height={150} />
      <Menu>
        {routes.map((page) => (
          <MenuItem key={page.title}>
            <ButtonScrollTo handleScrollTo={handleScrollTo} location={'#' + page.anchor} label={page.title}></ButtonScrollTo>
          </MenuItem>
        ))}
      </Menu>
      <StyledSplashIllustration src={SplashIllustration} alt="Splash illustration" width={550} />
    </StyledNav>
  )
}

export default memo(NavBar)
