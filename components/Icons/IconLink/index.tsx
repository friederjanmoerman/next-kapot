// Modules
import { memo } from 'react'

// MUI
import { IconButton } from '@mui/material'

// Types
import { IIconLink } from './types'

const IconLink = ({ link, icon }: IIconLink) => (
  <IconButton href={link} target="_blank" rel="noopener noreferrer">
    {icon}
  </IconButton>
)

export default memo(IconLink)
