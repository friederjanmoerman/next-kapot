// MUI
import { Button as MuiButton, styled } from "@mui/material"

// Types
import { IButtonProps } from "./types"

export const StyledButton = styled(MuiButton)<IButtonProps>(
  ({ theme, inverted, disabled }) => `
  && {
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

    :hover,
    :active {
      color: ${theme.palette.common.black};
      background: ${theme.palette.primary.main};
    }

    ${
      disabled &&
      `
        opacity: 0.3;
      `
    }

    // hacky bug fix to make multiple prop styles work

    :hover,
    :active {
      color: ${theme.palette.common.black};
      background: ${theme.palette.primary.main};
    }

    ${
      inverted &&
      `
        color: ${theme.palette.common.black};
        background: ${theme.palette.common.white};
      `
    }
  }
`
)
