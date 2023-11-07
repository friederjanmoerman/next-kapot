// React
import { memo } from 'react'

// Constants
import { SocialMediaRoutes } from './../../constantsSocialMedia'

// Types
import { INavbar as INavbarDefault } from '../types'
import { IToggledNavBar } from './types'

// Components
import ToggledNavBar from '../../ToggledNavBar'

// Styles
import { Block, LinkBtn, SocialsAnchor, SocialsBlock, SocialsTitle, SocialsIconGroup, ToggledNavBarWrapper } from './styles'

interface INavBar extends INavbarDefault, IToggledNavBar {}

const NavBarMobile = (props: INavBar) => {
  const { routes, isToggledNavBarOpen, handleViewToggledNavBar } = props

  return (
    <ToggledNavBarWrapper position="static" container>
      <ToggledNavBar isToggledNavBarOpen={isToggledNavBarOpen} handleViewToggledNavBar={handleViewToggledNavBar}>
        <Block item>
          {routes.map((page) => (
            <LinkBtn onClick={handleViewToggledNavBar} href={'#' + page.anchor} key={page.title}>
              {page.title}
            </LinkBtn>
          ))}
        </Block>
        <SocialsBlock item>
          <SocialsTitle>Follow us</SocialsTitle>
          <SocialsIconGroup container>
            {SocialMediaRoutes.map((page) => (
              <SocialsAnchor href={page.anchor} key={page.title} target="_blank">
                {page.icon}
              </SocialsAnchor>
            ))}
          </SocialsIconGroup>
        </SocialsBlock>
      </ToggledNavBar>
    </ToggledNavBarWrapper>
  )
}

export default memo(NavBarMobile)
