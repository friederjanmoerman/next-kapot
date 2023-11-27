import { Instagram, Facebook } from '@mui/icons-material'
import YouTubeIcon from '@mui/icons-material/YouTube'

import { Grid } from '@mui/material'

import { StyledLinkIcon } from './styles'
import { ISocialsBarProps } from './types'

const SocialsBar = (props: ISocialsBarProps) => {
  const { inverted } = props
  return (
    <Grid item xs={12}>
      <Grid container justifyContent="center" alignItems="center">
        <StyledLinkIcon inverted={inverted} href="https://www.youtube.com/@echtalleskapot" target="_blank" rel="noopener">
          <YouTubeIcon fontSize="large" />
        </StyledLinkIcon>
        <StyledLinkIcon inverted={inverted} href="https://www.instagram.com/echtalleskapot/" target="_blank" rel="noopener">
          <Instagram fontSize="large" />
        </StyledLinkIcon>
        <StyledLinkIcon inverted={inverted} href="https://www.facebook.com/echtalleskapot/" target="_blank" rel="noopener">
          <Facebook fontSize="large" />
        </StyledLinkIcon>
      </Grid>
    </Grid>
  )
}

export default SocialsBar
