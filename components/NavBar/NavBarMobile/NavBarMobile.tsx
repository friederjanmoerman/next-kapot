// React
import { memo } from 'react'

// Types
import { INavbar as INavbarDefault } from '../types'
import { IToggledNavBar } from './types'

// Components
import ToggledNavBar from '../../ToggledNavBar'

// Styles
import { Block, LinkBtn, SocialsBlock, ToggledNavBarWrapper } from './styles'
import { Typography } from '@mui/material'

import SocialsBar from '../../SocialsBar'

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
        </Block>
        <SocialsBlock>
          <SocialsBar inverted />
        </SocialsBlock>
      </ToggledNavBar>
    </ToggledNavBarWrapper>
  )
}

export default memo(NavBarMobile)
