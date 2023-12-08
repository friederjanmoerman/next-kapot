// Modules
import { forwardRef } from 'react'

// Components
import Button from '../../Button'
import IconLink from '../../Icons/IconLink'

// MUI
import { Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { AutoAwesome, Instagram } from '@mui/icons-material'

// Media
import SplashIllustrationTop from './../../../public/images/illustrations/paint-splash-2.svg'
import SplashIllustrationBottom from './../../../public/images/illustrations/paint-splash-3.svg'

// Styles
import {
  Section,
  StyledSplashIllustrationBottom,
  StyledSplashIllustrationTop,
  SectionSubtitle,
  Container,
  ItemTitle,
  ItemPrice,
  TeacherTitle,
  ItemMeta,
  TeacherBody,
  SectionSubtitleEmphasis,
  StyledList,
  ItemBody,
} from '../styles'

const SectionLearn = forwardRef<HTMLDivElement>(function SectionLearn(_, ref) {
  return (
    <Section ref={ref} inverted>
      <Typography color={'#fff'} variant="h1" component="h2">
        Learn
      </Typography>
      <SectionSubtitle variant="h2">
        Always wanted to improve at inline skating?<br></br>
        <SectionSubtitleEmphasis>Enroll now.</SectionSubtitleEmphasis>
      </SectionSubtitle>
      <Container container spacing={10}>
        <Grid item md={6} lg={6}>
          <ItemTitle variant="h1" component="h2">
            Private session
          </ItemTitle>
          <ItemPrice variant="h4">€40 per hour</ItemPrice>
          <ItemBody variant="h5">
            A personalised in person experience. You&apos;ll be privately thaught to inline skate by one of our teachers. We have one pair of
            adaptable size junior aggressive inline skates to try out for children. Ask beforehand, not always available! All ages and levels welcome.
            Access to our online inline skate community.
            <StyledList dense>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="private lesson" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="access to our online community" />
              </ListItem>
            </StyledList>
          </ItemBody>
          <Button href="https://calendly.com/kapot/private-session" inverted variant="contained" size="large" disableElevation label="Book session" />
        </Grid>
        <Grid item md={6} lg={6}>
          <ItemTitle variant="h1" component="h2">
            Kapot Member
          </ItemTitle>
          <ItemPrice variant="h4">€400 (first 5 members) per year</ItemPrice>
          <ItemBody variant="h5">
            Access to our inline skate online community. One year access to a coach: 24/7 feedback. We will analyze your videos, suggest training
            plans and answer questions. One monthly one hour feedback session included, online or in person. This plan saves you €80 if you would want
            a private session every month.
            <StyledList dense>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="monthly 1h private session" secondary="international member 1h live call" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="one year 24/7 online feedback" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="on and off skate training advice and plans" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="access to our online community" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="submit your clips, instant feedback" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="kapot shirt" />
              </ListItem>
            </StyledList>
          </ItemBody>
          <Button href="https://buy.stripe.com/00gfZDeaR55p4V28wy" inverted variant="contained" size="large" disableElevation label="Become member" />
        </Grid>
      </Container>
      <SectionSubtitle variant="h2">
        Introducing to you,<br></br>
        <SectionSubtitleEmphasis>the teachers.</SectionSubtitleEmphasis>
      </SectionSubtitle>
      <Container container spacing={7}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <TeacherTitle variant="h1" component="h2">
            Gilles
          </TeacherTitle>
          <Grid container>
            <Grid item>
              <IconLink href={'https://www.instagram.com/gilles.buelens/'} icon={<Instagram />} />
            </Grid>
          </Grid>
          <ItemMeta variant="h4">Skating for 24 years</ItemMeta>
          <ItemMeta variant="h4">27 years old</ItemMeta>
          <TeacherBody variant="h5">
            Co-founder Kapot. Incredible control, style and trick repertoire. Won multiple international contests both street and park.
          </TeacherBody>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <TeacherTitle variant="h1" component="h2">
            Frieder
          </TeacherTitle>
          <Grid container>
            <Grid item>
              <IconLink href={'https://www.instagram.com/shredpuppy/'} icon={<Instagram />} />
            </Grid>
          </Grid>
          <ItemMeta variant="h4">Skating for 11 years</ItemMeta>
          <ItemMeta variant="h4">32 years old</ItemMeta>
          <TeacherBody variant="h5">Co-founder Kapot. Surfer/skater/climber gypsy. Street elitist. Skates 3.5 hours on average daily.</TeacherBody>
        </Grid>
      </Container>
      <StyledSplashIllustrationTop src={SplashIllustrationTop} alt="Splash illustration learn section top" width={299} />
      <StyledSplashIllustrationBottom src={SplashIllustrationBottom} alt="Splash illustration learn section bottom" width={150} />
    </Section>
  )
})

export default SectionLearn
