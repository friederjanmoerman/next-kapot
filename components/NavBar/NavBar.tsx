// React
import { memo } from 'react'

// Images
import SplashIllustration from './../../public/images/illustrations/paint-splash-1.svg'

// Types
import { INavbar } from './types'

// Styles
import { StyledNav, Menu, MenuItem, StyledSplashIllustration, StyledLogo } from './styles'

// Components
import ButtonScrollTo from '../ButtonScrollTo'

// Images

const NavBar = (props: INavbar) => {
  const { routes, handleScrollTo } = props
  return (
    <StyledNav>
      <StyledLogo />
      <Menu>
        {routes.map((page) => (
          <MenuItem key={page.title}>
            <ButtonScrollTo handleScrollTo={handleScrollTo} location={'#' + page.anchor} label={page.title}></ButtonScrollTo>
          </MenuItem>
        ))}
      </Menu>
      <StyledSplashIllustration priority loading="eager" src={SplashIllustration} alt="Splash illustration" width={550} />
    </StyledNav>
  )
}

export default memo(NavBar)
