// Modules
import Link from 'next/link'

// MUI
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '../../Button'

export const ToggledNavBarWrapper = styled(Grid)(
  ({ theme }) => `
    && {
      display: none;
      position: absolute;
      
      ${theme.breakpoints.down('lg')} {
          display: flex;
      }
    }
  `,
)

export const Block = styled(Grid)`
  display: flex;
  flex-direction: column;
`

export const BtnBlock = styled(Grid)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid ${theme.palette.common.black};
    padding-bottom: 40px;

    button:first-of-type {
        margin-bottom: 12px;
    }
  `,
)

export const LinkBtn = styled(Link)(
  ({ theme }) => `
    && {
      background: transparent;
      color: ${theme.palette.common.black};
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 32px;
      text-decoration: none;
      transition: 0.2 color ease-out;

      :first-of-type {
        margin-top: 40px;
      }

      :hover {
        color: ${theme.palette.primary.main};
      }
    }
  `,
)

export const SocialsBlock = styled(Grid)(
  ({ theme }) => `
    flex-direction: column;
    margin-top: auto;
    border-top: 1px solid ${theme.palette.common.black};
    padding-top: 12px;
  `,
)

export const SocialsTitle = styled('div')(
  ({ theme }) => `
    color: grey;
    font-weight: 400;
    font-size: 16px;
  `,
)

export const SocialsAnchor = styled(Link)(
  ({ theme }) => `
    && {
      color: ${theme.palette.common.black};
      padding: 0;
      margin-right: 20px;
      margin-left: 20px;
      transition: 0.2s color ease-out;
      text-decoration: none;

      svg path {
        transition: 0.2s fill ease-out;
      }

      :first-of-type {
        margin-left: 0;
      }

      :hover {
        color: ${theme.palette.primary.main};

        svg path {
          fill: ${theme.palette.primary.main};
        }
      }
    }
  `,
)

export const SocialsIconGroup = styled(Grid)`
  margin-top: 12px;
`

export const BtnBase = styled(Button)`
  && {
    font-size: 16px;
    font-weight: 700;
    padding: 12px 16px;
  }
`

export const BtnStarted = styled(BtnBase)`
  && {
    width: 100%;
    line-height: 16px;
  }
`

export const BtnLogIn = styled(BtnBase)(
  ({ theme }) => `
    && {
      width: 100%;
      background: grey;
      color: ${theme.palette.common.black};
      line-height: 19px;
    }
  `,
)
