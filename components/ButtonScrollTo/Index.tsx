// MUI
import { Typography } from '@mui/material'

// Styles
import { StyledLink } from './styles'

// Types
import { IButtonScrollToProps } from './types'

const ButtonScrollTo = ({ label, location, handleScrollTo }: IButtonScrollToProps) => (
  <StyledLink onClick={handleScrollTo} href={location}>
    <Typography variant="h2">{label}</Typography>
  </StyledLink>
)

export default ButtonScrollTo
