// MUI
import { Link, styled } from '@mui/material'

const baseStyles = ({ theme }) => `
  color: ${theme.palette.common.black};
  display: flex;
  transition: all 0.4s ease-out;
  margin: 6px;
`

const invertedStyles = ({ theme }) => `
  &.inverted {
    color: ${theme.palette.common.white};

    :hover {
      color: ${theme.palette.primary.main};
    }
  }
`

export const StyledLinkIcon = styled(Link)(
  ({ theme }) => `
    ${baseStyles({ theme })}
    ${invertedStyles({ theme })}
  `,
)
