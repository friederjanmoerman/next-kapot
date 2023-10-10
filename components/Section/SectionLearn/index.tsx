// Modules

// Components
import Button from "../../Button"
import {
  Section,
  StyledSplashIllustrationBottom,
  StyledSplashIllustrationTop,
  SectionSubtitle,
  Container,
  ProductTitle,
  ProductPrice,
  TeacherTitle,
  TeacherTag,
  TeacherMeta,
  TeacherBody,
  SectionSubtitleEmphasis,
} from "./../styles"

// MUI
import { Grid, Typography } from "@mui/material"

// Images
import SplashIllustrationTop from "./../../../public/images/illustrations/paint-splash-2.svg"
import SplashIllustrationBottom from "./../../../public/images/illustrations/paint-splash-3.svg"

const SectionLearn = () => {
  return (
    <Section inverted>
      <Typography color={"#fff"} variant="h1" component="h2">
        Learn
      </Typography>
      <SectionSubtitle variant="h2">
        Always wanted to improve at inline skating?<br></br>
        <SectionSubtitleEmphasis>Enroll now.</SectionSubtitleEmphasis>
      </SectionSubtitle>
      <Container container spacing={7}>
        <Grid item lg={6}>
          <ProductTitle variant="h4">Private session</ProductTitle>
          <Typography variant="h4" color={"#fff"}>
            Anywhere
          </Typography>
          <ProductPrice variant="h4">€40 per hour</ProductPrice>
          <Typography variant="h5" color={"#fff"}>
            A personalised in person experience. You&apos;ll be privately thaught to inline skate by one of our
            teachers. We have one pair of adaptable size junior aggressive inline skates to try out for children. Ask
            beforehand, not always available! All ages and levels welcome. Access to our exclusive online inline skate
            community, a Whatsapp group.
          </Typography>
          <Button inverted variant="contained" size="large" disableElevation label="Book session" />
        </Grid>
        <Grid item lg={6}>
          <ProductTitle variant="h4">Kapot Membership</ProductTitle>
          <Typography variant="h4" color={"#fff"}>
            Anywhere
          </Typography>
          <ProductPrice variant="h4">€400 per year</ProductPrice>
          <Typography variant="h5" color={"#fff"}>
            Access to our exclusive inline skate online community, a Whatsapp group. One year access to a coach: 24/7
            feedback. We will analyze your videos, suggest training plans and answer questions. One monthly one hour
            feedback session included, online or in person. This plan saves you €80 if you would want a private session
            every month.
          </Typography>
          <Button inverted variant="contained" size="large" disableElevation label="Become member" />
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
          <TeacherMeta variant="h4">27 years old</TeacherMeta>
          <TeacherMeta variant="h4">Skating for 24 years</TeacherMeta>
          <TeacherBody variant="h5">
            Incredible control, style and trick repertoire. Won multiple international contests both street and park.
          </TeacherBody>
        </Grid>
        <Grid item lg={4}>
          <TeacherTitle variant="h1" component="h2">
            Frieder
          </TeacherTitle>
          <TeacherTag variant="h5">@shredpuppy</TeacherTag>
          <TeacherMeta variant="h4">32 years old</TeacherMeta>
          <TeacherMeta variant="h4">Skating for 11 years</TeacherMeta>
          <TeacherBody variant="h5">Surfer/skater nomad. Loves street. Skates 3.5 hours on average daily.</TeacherBody>
        </Grid>
        <Grid item lg={4}>
          <TeacherTitle variant="h1" component="h2">
            Tom
          </TeacherTitle>
          <TeacherTag variant="h5">@tom_couvreur</TeacherTag>
          <TeacherMeta variant="h4">27 years old</TeacherMeta>
          <TeacherMeta variant="h4">Skating for 24 years</TeacherMeta>
          <TeacherBody variant="h5">
            Incredible control, style and trick repertoire. Won multiple international contests both street and park.
          </TeacherBody>
        </Grid>
      </Container>
      <StyledSplashIllustrationTop
        src={SplashIllustrationTop}
        alt="Splash illustration learn section top"
        width={300}
      />
      <StyledSplashIllustrationBottom
        src={SplashIllustrationBottom}
        alt="Splash illustration learn section bottom"
        width={150}
      />
    </Section>
  )
}

export default SectionLearn
