// Modules

// Components
import { Section } from "./styles"

// MUI
import { Grid, Typography } from "@mui/material"

const SectionLearn = () => {
  return (
    <Section>
      <Typography color={"#fff"} variant="h1" component="h2">
        Learn
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color={"#fff"}>
            Subtitle
          </Typography>
          <Typography color={"#fff"}>Text</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" color={"#fff"}>
            Subtitle
          </Typography>
          <Typography color={"#fff"}>Text</Typography>
        </Grid>
      </Grid>
    </Section>
  )
}

export default SectionLearn
