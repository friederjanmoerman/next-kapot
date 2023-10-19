import { Facebook, Instagram, MailOutline } from "@mui/icons-material"

import YouTubeIcon from "@mui/icons-material/YouTube"

// MUI
import { Container, Grid, Typography, Box } from "@mui/material"
import { SectionFooter, StyledLinkIcon } from "./styles"
import Logo from "../../Icons/Logo"

const Footer = () => {
  return (
    <SectionFooter>
      <Container maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid textAlign={"center"} item xs={12}>
            <Logo />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" component="div" align="center">
              <MailOutline /> your@email.com
            </Typography>
          </Grid>

          <Grid container item xs={12} spacing={2} flexDirection="column">
            <Box textAlign="center">
              <StyledLinkIcon href="https://www.youtube.com" target="_blank" rel="noopener">
                <YouTubeIcon fontSize="large" />
              </StyledLinkIcon>
              <StyledLinkIcon href="https://www.instagram.com" target="_blank" rel="noopener">
                <Instagram fontSize="large" />
              </StyledLinkIcon>
              <StyledLinkIcon href="https://www.facebook.com" target="_blank" rel="noopener">
                <Facebook fontSize="large" />
              </StyledLinkIcon>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SectionFooter>
  )
}

export default Footer
