// Modules
import { forwardRef } from 'react'

// Components
import Button from '../../Button'
import {
  Section,
  StyledSplashIllustrationBottom,
  StyledSplashIllustrationTop,
  SectionSubtitle,
  Container,
  ItemTitle,
  ItemPrice,
  TeacherTitle,
  TeacherTag,
  ItemMeta,
  TeacherBody,
  SectionSubtitleEmphasis,
} from '../styles'

// MUI
import { Grid, Typography } from '@mui/material'

// Images
import SplashIllustrationTop from './../../../public/images/illustrations/paint-splash-2.svg'
import SplashIllustrationBottom from './../../../public/images/illustrations/paint-splash-3.svg'

const SectionLearn = forwardRef<HTMLDivElement>(function SectionLearn(_, ref) {
  return (
    <Section ref={ref} inverted={true}>
      <Typography color={'#fff'} variant="h1" component="h2">
        Learn
      </Typography>
      <SectionSubtitle variant="h2">
        Always wanted to improve at inline skating?<br></br>
        <SectionSubtitleEmphasis>Enroll now.</SectionSubtitleEmphasis>
      </SectionSubtitle>
      <Container container spacing={7}>
        <Grid item lg={6}>
          <ItemTitle variant="h4">Private session</ItemTitle>
          <Typography variant="h4">Anywhere</Typography>
          <ItemPrice variant="h4">€40 per hour</ItemPrice>
          <Typography variant="h5">
            A personalised in person experience. You&apos;ll be privately thaught to inline skate by one of our teachers. We have one pair of
            adaptable size junior aggressive inline skates to try out for children. Ask beforehand, not always available! All ages and levels welcome.
            Access to our exclusive online inline skate community, a Whatsapp group.
          </Typography>
          <Button href="https://calendly.com/kapot/private-session" inverted variant="contained" size="large" disableElevation label="Book session" />
        </Grid>
        <Grid item lg={6}>
          <ItemTitle variant="h4">Kapot Membership</ItemTitle>
          <Typography variant="h4">Anywhere</Typography>
          <ItemPrice variant="h4">€400 (first 5 members) per year</ItemPrice>
          <Typography variant="h5">
            Access to our exclusive inline skate online community, a Whatsapp group. One year access to a coach: 24/7 feedback. We will analyze your
            videos, suggest training plans and answer questions. One monthly one hour feedback session included, online or in person. This plan saves
            you €80 if you would want a private session every month.
          </Typography>
          <Button href="https://buy.stripe.com/00gfZDeaR55p4V28wy" inverted variant="contained" size="large" disableElevation label="Become member" />
        </Grid>
      </Container>
      <SectionSubtitle variant="h2">
        Introducing to you,<br></br>
        <SectionSubtitleEmphasis>the teachers.</SectionSubtitleEmphasis>
      </SectionSubtitle>
      <Container container spacing={7}>
        <Grid item lg={4}>
          <TeacherTitle variant="h1" component="h2">
            Gilles
          </TeacherTitle>
          <TeacherTag variant="h5">@gilles.buelens</TeacherTag>
          <ItemMeta variant="h4">27 years old</ItemMeta>
          <ItemMeta variant="h4">Skating for 24 years</ItemMeta>
          <TeacherBody variant="h5">
            Incredible control, style and trick repertoire. Won multiple international contests both street and park.
          </TeacherBody>
        </Grid>
        <Grid item lg={4}>
          <TeacherTitle variant="h1" component="h2">
            Frieder
          </TeacherTitle>
          <TeacherTag variant="h5">@shredpuppy</TeacherTag>
          <ItemMeta variant="h4">32 years old</ItemMeta>
          <ItemMeta variant="h4">Skating for 11 years</ItemMeta>
          <TeacherBody variant="h5">Surfer/skater nomad. Loves street. Skates 3.5 hours on average daily.</TeacherBody>
        </Grid>
      </Container>
      <StyledSplashIllustrationTop src={SplashIllustrationTop} alt="Splash illustration learn section top" height={348} />
      <StyledSplashIllustrationBottom src={SplashIllustrationBottom} alt="Splash illustration learn section bottom" width={150} />
    </Section>
  )
})

export default SectionLearn
