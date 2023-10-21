import { Facebook, Instagram, MailOutline } from "@mui/icons-material"

import YouTubeIcon from "@mui/icons-material/YouTube"

// MUI
import { Grid, Typography } from "@mui/material"
import { SectionFooter, StyledLinkIcon } from "./styles"
import Logo from "../../Icons/Logo"

const Footer = () => {
  return (
    <SectionFooter>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <Logo />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h3">kapot@echtalleskapot.be</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <StyledLinkIcon href="https://www.youtube.com" target="_blank" rel="noopener">
              <YouTubeIcon fontSize="large" />
            </StyledLinkIcon>
            <StyledLinkIcon href="https://www.instagram.com" target="_blank" rel="noopener">
              <Instagram fontSize="large" />
            </StyledLinkIcon>
            <StyledLinkIcon href="https://www.facebook.com" target="_blank" rel="noopener">
              <Facebook fontSize="large" />
            </StyledLinkIcon>
          </Grid>
        </Grid>
      </Grid>
    </SectionFooter>
  )
}

export default Footer
