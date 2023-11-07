// React
import { memo } from 'react'

// Images
import SplashIllustration from './../../public/images/illustrations/paint-splash-1.svg'
import Logo from './../icons/Logo'

// Types
import { INavbar } from './types'

// Styles
import { StyledNav, Menu, MenuItem, StyledSplashIllustration } from './styles'

// Components
import ButtonScrollTo from './../ButtonScrollTo/Index'

// Images
import KapotLogo from './../../public/images/illustrations/logo--white.svg'

const NavBar = (props: INavbar) => {
  const { routes, handleScrollTo } = props
  return (
    <StyledNav>
      <Logo src={KapotLogo} height={150} alt={'Kapot logo'} />
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
