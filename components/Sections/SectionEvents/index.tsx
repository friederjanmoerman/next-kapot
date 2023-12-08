// Modules
import { forwardRef } from 'react'

// Components
import Button from '../../Button'

// MUI
import { Grid, Typography } from '@mui/material'

// Media
import SplashIllustrationBottomVariation1 from './../../../public/images/illustrations/paint-splash-4.svg'

// Styles
import {
  SectionSubtitle,
  Container,
  ItemTitle,
  ItemPrice,
  SectionSubtitleEmphasis,
  ItemMeta,
  StyledSplashIllustrationBottomVariation1,
  Section,
  ItemBody,
} from '../styles'

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
        <Grid item md={6} lg={6}>
          <ItemTitle variant="h1" component="h2">
            Kapot Contest
          </ItemTitle>
          <ItemMeta variant="h4">Sportoase skatepark, Leuven</ItemMeta>
          <ItemMeta variant="h4">First Saturday of August</ItemMeta>
          <ItemPrice variant="h4">Free</ItemPrice>
          <ItemBody variant="h5">
            Belgian annual celebration of inline skating! Feel the vibes as skaters from all over the world come together to showcase their tricks.
            It&apos;s more than a contest; it&apos;s a family gathering where everyone&apos;s passion for rollerblading is shared. Come out and play!
          </ItemBody>
          <Button disabled variant="contained" size="large" disableElevation label="To be announced" />
        </Grid>
        <Grid item md={6} lg={6}>
          <ItemTitle variant="h1" component="h2">
            Kapot sessions
          </ItemTitle>
          <ItemMeta variant="h4">Anywhere</ItemMeta>
          <ItemPrice variant="h4">Free</ItemPrice>
          <ItemBody variant="h5">Inline skate jams at different locations, park and street. No entry fee, bring your skates and skate.</ItemBody>
          <Button disabled variant="contained" size="large" disableElevation label="Upcoming event" />
        </Grid>
        <Grid item md={6} lg={6}>
          <ItemTitle variant="h1" component="h2">
            Nocturnus
          </ItemTitle>
          <ItemMeta variant="h4">Blaarmeersen skatepark, Gent</ItemMeta>
          <ItemMeta variant="h4">TBA</ItemMeta>
          <ItemPrice variant="h4">Free</ItemPrice>
          <ItemBody variant="h5">
            All-night inline skate jam in a skatepark. Tradition brought back to life. Relocated to Gent! Lights will be lit until morning.
          </ItemBody>
          <Button disabled variant="contained" size="large" disableElevation label="To be announced" />
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
