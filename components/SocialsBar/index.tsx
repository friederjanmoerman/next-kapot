// MUI
import { Grid } from '@mui/material'

// Styles
import { StyledLinkIcon } from './styles'

// Constants
import { constantsSocialMedia } from './constantsSocialMedia'
import { ISocialsBar } from './types'

const SocialsBar = (props: ISocialsBar) => {
  const { className } = props
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" alignItems="center">
        {constantsSocialMedia.map((route, index) => (
          <StyledLinkIcon aria-label={route.ariaLabel} className={className} key={index} href={route.link} target="_blank" rel="noopener">
            {route.icon}
          </StyledLinkIcon>
        ))}
      </Grid>
    </Grid>
  )
}

export default SocialsBar
