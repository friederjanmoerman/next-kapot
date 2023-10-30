import { ButtonProps as MuiButtonProps } from "@mui/material"

export interface IButtonProps extends MuiButtonProps {
  label?: string
  nonActive?: boolean
  inverted?: boolean
}
