// MUI
import { Link, styled } from '@mui/material'

export const MenuItem = styled('li')`
  font-size: 32px;
  text-transform: uppercase;
`

export const StyledLink = styled(Link)(
  ({ theme }) => `
    color: ${theme.palette.common.white};
    text-decoration: none;
    transition: all 0.4s ease-out;

    // safari hover font bug fix
    h1, h2, h3, h4, h5, h6 {
      margin: 0 -9px;
      padding: 0 9px;
    }

    :hover,
    :active {
      color: ${theme.palette.primary.main};
    }
  `,
)
