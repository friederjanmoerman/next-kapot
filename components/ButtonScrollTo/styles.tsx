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

    :hover,
    :active {
      color: ${theme.palette.primary.main};
    }
  `,
)
