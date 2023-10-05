// Modules

// Components
import Button from "../Button"
import { Section, StyledSplashIllustration } from "./styles"

// MUI
import { Grid, Typography } from "@mui/material"

// Images
import SplashIllustration from "./../../public/images/illustrations/paint-splash-3.svg"

const SectionLearn = () => {
  return (
    <Section>
      <Typography color={"#fff"} variant="h1" component="h2">
        Learn
      </Typography>
      <Grid container spacing={7}>
        <Grid item lg={6}>
          <Typography variant="h4" color={"#fff"}>
            Private
          </Typography>
          <Typography variant="h4" color={"#fff"}>
            Anywhere
          </Typography>
          <Typography variant="h4" color={"fee502"}>
            €35/hour
          </Typography>
          <Typography variant="h5" color={"#fff"}>
            A more personalised experience. You&apos;ll be privately thaught to skate by one of our teachers. Ask for
            availability. We have junior aggressive inline skates to try out for your child. Ask beforehand, not always
            available! All ages and levels welcome.
          </Typography>
          <Button inverted variant="contained" size="large" disableElevation label="Book session" />
        </Grid>
      </Grid>
      <StyledSplashIllustration src={SplashIllustration} alt="Splash illustration" width={150} />
    </Section>
  )
}

export default SectionLearn
