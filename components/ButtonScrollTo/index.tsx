// Modules
import { memo } from 'react'

// MUI
import { Typography } from '@mui/material'

// Styles
import { StyledLink } from './styles'

// Types
import { IButtonScrollTo } from './types'

const ButtonScrollTo = ({ label, location, handleScrollTo }: IButtonScrollTo) => (
  <StyledLink onClick={handleScrollTo} href={location}>
    <Typography variant="h2">{label}</Typography>
  </StyledLink>
)

export default memo(ButtonScrollTo)
