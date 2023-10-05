import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from "@mui/material"

export interface IButtonProps extends MuiButtonProps {
  label?: string
  nonActive?: boolean
  inverted?: boolean
}

export const StyledButton = styled(MuiButton)<IButtonProps>(
  ({ theme, inverted }) => `
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
    
    ${
      inverted &&
      `
        color: ${theme.palette.common.black};
        background: ${theme.palette.common.white};
      `
    }

    :hover,
    :active {
      color: ${theme.palette.common.black};
      background: ${theme.palette.primary.main};
    }
  }
`
)
