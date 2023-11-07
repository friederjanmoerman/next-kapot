// Types
import { IToggledNavBar } from './types'

// Styles
import { Content, ToggledNavBarWrapper, ToggleBtn, Overlay, ToggleBtnMiddleStroke, ToggleBtnTopStroke, ToggleBtnBottomStroke } from './styles'

import MobileMenuStrokeIllustration from './../../public/images/illustrations/paint-mobile-menu-stroke.svg'
import Image from 'next/image'

const ToggledNavBar = (props: IToggledNavBar) => {
  const { children, isToggledNavBarOpen, handleViewToggledNavBar } = props

  return (
    <>
      <ToggleBtn open={isToggledNavBarOpen} onClick={handleViewToggledNavBar}>
        {/* <b className="top"></b>
        <b className="middle"></b>
        <b className="bottom"></b> */}
        <ToggleBtnTopStroke
          className="top"
          src={MobileMenuStrokeIllustration}
          alt={'Mobile menu stroke illustration'}
          width={50}
        ></ToggleBtnTopStroke>
        <ToggleBtnMiddleStroke
          className="middle"
          src={MobileMenuStrokeIllustration}
          alt={'Mobile menu stroke illustration'}
          width={50}
        ></ToggleBtnMiddleStroke>
        <ToggleBtnBottomStroke
          className="bottom"
          src={MobileMenuStrokeIllustration}
          alt={'Mobile menu stroke illustration'}
          width={50}
        ></ToggleBtnBottomStroke>
      </ToggleBtn>
      <Overlay open={isToggledNavBarOpen} onClick={handleViewToggledNavBar}></Overlay>
      <ToggledNavBarWrapper open={isToggledNavBarOpen}>
        <Content open={isToggledNavBarOpen}>{children}</Content>
      </ToggledNavBarWrapper>
    </>
  )
}

export default ToggledNavBar
