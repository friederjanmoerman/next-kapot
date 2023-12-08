// Modules
import Link from 'next/link'
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'

export const ToggledNavBarWrapper = styled(Grid)(
  ({ theme }) => `
    && {
      display: none;
      position: absolute;
      z-index: 9500;
      
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
    border-bottom: 1px solid ${theme.palette.common.white};
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
      color: ${theme.palette.common.white};
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      margin-bottom: 32px;
      text-decoration: none;
      transition: 0.2 color ease-out;
      display: flex;

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
    justify-content: center;
    align-items: center;
    margin-top: auto;
    padding-top: 12px;
  `,
)

export const StyledSplashIllustration = styled(Image)(
  ({ theme }) => `
      position: absolute;
      left: 0;
      bottom: 25%;
      z-index: -1;
    `,
)
