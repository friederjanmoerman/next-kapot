// Next
import Image from 'next/image'

// MUI
import { styled } from '@mui/material'

export const StyledNav = styled('nav')(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.palette.common.white};
    width: 100%;
    position: absolute;
    z-index: 9000;
    padding: 45px 7%;
  `,
)

export const StyledSplashIllustration = styled(Image)`
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 9001;
`

export const Menu = styled('ul')(
  ({ theme }) => `
    list-style: none;
    display: flex;
    justify-content: flex-end;
    gap: 70px;
    position: relative;
    z-index: 9002;

    ${theme.breakpoints.down('lg')} {
      display: none;
    }
  `,
)

export const MenuItem = styled('li')`
  font-size: 32px;
  text-transform: uppercase;
`