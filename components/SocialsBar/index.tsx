// MUI
import { Grid } from '@mui/material'

// Styles
import { StyledLinkIcon } from './styles'

// Constants
import { constantsSocialMedia } from './constantsSocialMedia'

const SocialsBar = () => {
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" alignItems="center">
        {constantsSocialMedia.map((route, index) => (
          <StyledLinkIcon className="inverted" key={index} href={route.link} target="_blank" rel="noopener">
            {route.icon}
          </StyledLinkIcon>
        ))}
      </Grid>
    </Grid>
  )
}

export default SocialsBar
