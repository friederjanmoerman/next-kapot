// Modules
import { memo } from 'react'

// MUI
import { Typography } from '@mui/material'

// Components
import ToggledNavBar from '../../ToggledNavBar'
import SocialsBar from '../../SocialsBar'

// Media
import SplashIllustration from '../../../public/images/illustrations/paint-splash-1.svg'

// Styles
import { Block, LinkBtn, SocialsBlock, ToggledNavBarWrapper, StyledSplashIllustration } from './styles'

// Types
import { INavbar as INavbarDefault } from '../types'
import { IToggledNavBar } from './types'

interface INavBar extends INavbarDefault, IToggledNavBar {}

const NavBarMobile = (props: INavBar) => {
  const { routes, isToggledNavBarOpen, handleViewToggledNavBar } = props

  return (
    <ToggledNavBarWrapper position="static" container>
      <ToggledNavBar isToggledNavBarOpen={isToggledNavBarOpen} handleViewToggledNavBar={handleViewToggledNavBar}>
        <Block item>
          {routes.map((page) => (
            <LinkBtn onClick={handleViewToggledNavBar} href={'#' + page.anchor} key={page.title}>
              <Typography variant="h2" textTransform={'uppercase'}>
                {page.title}
              </Typography>
            </LinkBtn>
          ))}
          <StyledSplashIllustration src={SplashIllustration} alt="Splash illustration" width={198} />
        </Block>
        <SocialsBlock>
          <SocialsBar inverted />
        </SocialsBlock>
      </ToggledNavBar>
    </ToggledNavBarWrapper>
  )
}

export default memo(NavBarMobile)
