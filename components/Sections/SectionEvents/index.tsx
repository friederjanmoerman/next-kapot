// Modules
import { forwardRef } from "react"

// Components
import Button from "../../Button"
import {
  SectionSubtitle,
  Container,
  ItemTitle,
  ItemPrice,
  SectionSubtitleEmphasis,
  ItemMeta,
  StyledSplashIllustrationBottomVariation1,
  Section,
} from "../styles"

// MUI
import { Grid, Typography } from "@mui/material"

// Images
import SplashIllustrationBottomVariation1 from "./../../../public/images/illustrations/paint-splash-4.svg"

const SectionEvents = forwardRef<HTMLDivElement>(function SectionEvents(_, ref) {
  return (
    <Section ref={ref}>
      <Typography variant="h1" component="h2">
        Events
      </Typography>
      <SectionSubtitle variant="h2">
        Shouldering <SectionSubtitleEmphasis>Kapot Contest</SectionSubtitleEmphasis> <br></br>
        and other internationally recognised events.
      </SectionSubtitle>
      <Container container spacing={7}>
        <Grid item lg={6}>
          <ItemTitle variant="h4">Kapot Contest</ItemTitle>
          <ItemMeta variant="h4">Sportoase skatepark, Leuven</ItemMeta>
          <ItemMeta variant="h4">First Saturday of August</ItemMeta>
          <ItemPrice variant="h4">Free</ItemPrice>
          <Typography variant="h5">
            A personalised in person experience. You&apos;ll be privately thaught to inline skate by one of our
            teachers. We have one pair of adaptable size junior aggressive inline skates to try out for children. Ask
            beforehand, not always available! All ages and levels welcome. Access to our exclusive online inline skate
            community, a Whatsapp group.
          </Typography>
          <Button variant="contained" size="large" disableElevation label="Upcoming event" />
        </Grid>
        <Grid item lg={6}>
          <ItemTitle variant="h4">Kapot sessions</ItemTitle>
          <ItemMeta variant="h4">Anywhere</ItemMeta>
          <ItemPrice variant="h4">Free</ItemPrice>
          <Typography variant="h5">
            Access to our exclusive inline skate online community, a Whatsapp group. One year access to a coach: 24/7
            feedback. We will analyze your videos, suggest training plans and answer questions. One monthly one hour
            feedback session included, online or in person. This plan saves you €80 if you would want a private session
            every month.
          </Typography>
          <Button disabled variant="contained" size="large" disableElevation label="Upcoming event" />
        </Grid>
      </Container>
      <StyledSplashIllustrationBottomVariation1
        src={SplashIllustrationBottomVariation1}
        alt="Splash illustration events section bottom"
        width={950}
      />
    </Section>
  )
})

export default SectionEvents
