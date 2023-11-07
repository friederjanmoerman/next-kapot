// MUI
import { styled, Box, Grid } from '@mui/material'

// Types
import { IBox, IButton, IToggle } from './types'

export const Overlay = styled('div')<IBox>(
  ({ open }) => `
    display: ${open ? 'block' : 'none'};
    backdrop-filter: blur(4px);
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 900;
    background: rgba(0,0,0, 0.1);
  `,
)

export const ToggledNavBarWrapper = styled(Box)<IBox>(
  ({ theme, open }) => `
    width: ${open ? 280 : 0}px;
    opacity: ${open ? 1 : 0};
    background: ${theme.palette.common.white};
    flex-wrap: nowrap;
    height: 100%;
    padding-top: 90px;
    padding-bottom: 28px;
    padding-right: ${open ? 24 : 0}px; 
    padding-left: ${open ? 24 : 0}px;
    position: fixed; 
    right: 0;
    top: 0;
    align-items: center;
    z-index: 1000;
    transition: 0.2s width ease-out, 0.2s padding-left ease-out, 0.2s padding-right ease-out;
    overflow-y: scroll;
  `,
)

export const ToggleBtn = styled('span')<IButton>(
  ({ open, theme }) => `
  && {
    position: fixed;
    right: 30px;
    top: 24px;
    width: 28px;
    height: 30px;
    z-index: 9001;
    cursor: pointer; 

    .top, .middle, .bottom {
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 2px;
      margin: -2px 0 0;
      border-radius: 8px;
      background: ${theme.palette.common.black};
      transform-origin: 50%;
      transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    :hover {
      .top, .middle, .bottom {
        background: ${theme.palette.primary.main};
      }
    }

    .top {
      transform: translate(0, -8px);
    }

    .bottom {
      transform: translate(0, 8px);
    }

    .top {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0, -8px'};
    }

    .middle {
      opacity: ${open ? 0 : 1};
    }

    .bottom {
      transform: ${open ? 'rotate(45deg)' : 'translate(0, 8px)'};
    }
`,
)

export const Content = styled(Grid)<IToggle>(
  ({ open }) => `
    transition: 0.2s opacity ease-out;
    transition-delay: 100ms;
    opacity: ${open ? 1 : 0};
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
)
