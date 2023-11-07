// Modules
import { ReactNode } from 'react'

// MUI
import { BoxProps, ButtonProps } from '@mui/material'

export interface IToggledNavBar {
  children: ReactNode
  isToggledNavBarOpen: boolean
  handleViewToggledNavBar: () => void
}

export interface IToggle {
  open: boolean
}

export interface IButton extends ButtonProps, IToggle {}

export interface IBox extends BoxProps, IToggle {}
