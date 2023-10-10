// Modules

// Components
import Button from "../../Button"
import {
  Section,
  SectionSubtitle,
  Container,
  ProductTitle,
  ProductPrice,
  TeacherTitle,
  TeacherTag,
  TeacherMeta,
  TeacherBody,
} from "./../styles"

// MUI
import { Grid, Typography } from "@mui/material"

const SectionEvents = () => {
  return (
    <Section>
      <Typography variant="h1" component="h2">
        Learn
      </Typography>
      <SectionSubtitle variant="h2">Shouldering Kapot Contest</SectionSubtitle>
      <Typography variant="h2" textTransform={"uppercase"} fontSize={"51px"}>
        and other internationally recognised events.
      </Typography>
      <Container container spacing={7}>
        <Grid item lg={6}>
          <ProductTitle variant="h4">Private session</ProductTitle>
          <Typography variant="h4">Anywhere</Typography>
          <ProductPrice variant="h4">€40 per hour</ProductPrice>
          <Typography variant="h5">
            A personalised in person experience. You&apos;ll be privately thaught to inline skate by one of our
            teachers. We have one pair of adaptable size junior aggressive inline skates to try out for children. Ask
            beforehand, not always available! All ages and levels welcome. Access to our exclusive online inline skate
            community, a Whatsapp group.
          </Typography>
          <Button inverted variant="contained" size="large" disableElevation label="Book session" />
        </Grid>
        <Grid item lg={6}>
          <ProductTitle variant="h4">Kapot Membership</ProductTitle>
          <Typography variant="h4">Anywhere</Typography>
          <ProductPrice variant="h4">€400 per year</ProductPrice>
          <Typography variant="h5">
            Access to our exclusive inline skate online community, a Whatsapp group. One year access to a coach: 24/7
            feedback. We will analyze your videos, suggest training plans and answer questions. One monthly one hour
            feedback session included, online or in person. This plan saves you €80 if you would want a private session
            every month.
          </Typography>
          <Button inverted variant="contained" size="large" disableElevation label="Become member" />
        </Grid>
      </Container>
    </Section>
  )
}

export default SectionEvents
