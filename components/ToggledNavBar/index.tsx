// Types
import { IToggledNavBar } from './types'

// Styles
import { Content, ToggledNavBarWrapper, ToggleBtn, Overlay } from './styles'

const ToggledNavBar = (props: IToggledNavBar) => {
  const { children, isToggledNavBarOpen, handleViewToggledNavBar } = props

  return (
    <>
      <ToggleBtn open={isToggledNavBarOpen} onClick={handleViewToggledNavBar}>
        <b className="top"></b>
        <b className="middle"></b>
        <b className="bottom"></b>
      </ToggleBtn>
      <Overlay open={isToggledNavBarOpen} onClick={handleViewToggledNavBar}></Overlay>
      <ToggledNavBarWrapper open={isToggledNavBarOpen}>
        <Content open={isToggledNavBarOpen}>{children}</Content>
      </ToggledNavBarWrapper>
    </>
  )
}

export default ToggledNavBar
