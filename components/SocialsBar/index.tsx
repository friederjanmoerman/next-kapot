// MUI
import { Grid } from '@mui/material'

// Styles
import { StyledLinkIcon } from './styles'

// Types
import { ISocialsBarProps } from './types'

// Constants
import { constantsSocialMedia } from './constantsSocialMedia'

const SocialsBar = (props: ISocialsBarProps) => {
  const { inverted } = props
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" alignItems="center">
        {constantsSocialMedia.map((route, index) => (
          <StyledLinkIcon key={index} inverted={inverted} href={route.link} target="_blank" rel="noopener">
            {route.icon}
          </StyledLinkIcon>
        ))}
      </Grid>
    </Grid>
  )
}

export default SocialsBar
