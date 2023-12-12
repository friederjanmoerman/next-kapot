// Modules
import { memo } from 'react'

// MUI
import { IconButton } from '@mui/material'

// Types
import { IIconLinkProps } from './types'

const IconLink = ({ link, icon }: IIconLinkProps) => (
  <IconButton href={link} target="_blank" rel="noopener noreferrer">
    {icon}
  </IconButton>
)

export default memo(IconLink)
