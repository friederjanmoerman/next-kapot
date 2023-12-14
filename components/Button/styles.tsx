// MUI
import { Button as MuiButton, styled } from '@mui/material'

// Types
import { IButton } from './types'

const baseStyles = ({ theme }) => `
  background: ${theme.palette.common.black};
  padding: 8px 20px;
  text-transform: uppercase;
  font-family: ${theme.typography.h2.fontFamily};
  font-size: 20px;
  color: ${theme.palette.common.white};
  transition: all 0.4s ease-out;
  border-radius: 0;
  letter-spacing: ${theme.typography.h5.letterSpacing};
  margin-top: 34px;

  ${theme.breakpoints.down('sm')} {
    font-size: 14px;
  }
`

const hoverStyles = ({ theme }) => `
  :hover,
  :active {
    color: ${theme.palette.common.black};
    background: ${theme.palette.primary.main};
  }
`

const disabledStyles = ({ disabled }) => `
  ${
    disabled &&
    `
      opacity: 0.3;
    `
  }
`

const invertedStyles = ({ theme, inverted }) => `
  ${
    inverted &&
    `
      // Apply hover styles again to fix a bug with multiple prop styles
      :hover,
      :active {
        color: ${theme.palette.common.black};
        background: ${theme.palette.primary.main};
      }

      // Regular styling
      color: ${theme.palette.common.black};
      background: ${theme.palette.common.white};
    `
  }
`

export const StyledButton = styled(MuiButton)<IButton>(
  ({ theme, inverted, disabled }) => `
    && {
      ${baseStyles({ theme })}
      ${hoverStyles({ theme })}
      ${disabledStyles({ disabled })}
      ${invertedStyles({ theme, inverted })}
    }
  `,
)
