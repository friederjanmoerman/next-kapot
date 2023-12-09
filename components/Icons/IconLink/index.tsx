// MUI
import { IconButton } from '@mui/material'

// Types
import { IconLinkProps } from './types'

const IconLink = ({ href, icon }: IconLinkProps) => (
  <IconButton href={href} target="_blank" rel="noopener noreferrer">
    {icon}
  </IconButton>
)

export default IconLink
