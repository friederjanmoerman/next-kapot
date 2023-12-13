// Modules
import { forwardRef } from 'react'

// Components
import IconLink from '../../Icons/IconLink'

// MUI
import { Grid, Typography } from '@mui/material'
import { Instagram } from '@mui/icons-material'

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
  TeacherTitle,
  ItemMeta,
  TeacherBody,
  SectionSubtitleEmphasis,
} from '../styles'
import ContainerPlans from './Plans'

const SectionLearn = forwardRef<HTMLDivElement>(function SectionLearn(_, ref) {
  return (
    <Section ref={ref} inverted>
      <Typography variant="h1" component="h2">
        Learn
      </Typography>
      <SectionSubtitle variant="h2">
        Always wanted to improve at inline skating?<br></br>
        <SectionSubtitleEmphasis>Enroll now.</SectionSubtitleEmphasis>
      </SectionSubtitle>
      <ContainerPlans />
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
              <IconLink link={'https://www.instagram.com/gilles.buelens/'} icon={<Instagram />} />
            </Grid>
          </Grid>
          <ItemMeta as="h3" variant="h4">
            Skating for 24 years
          </ItemMeta>
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
              <IconLink link={'https://www.instagram.com/shredpuppy/'} icon={<Instagram />} />
            </Grid>
          </Grid>
          <ItemMeta as="h3" variant="h4">
            Skating for 11 years
          </ItemMeta>
          <ItemMeta variant="h4">32 years old</ItemMeta>
          <TeacherBody variant="h5">Co-founder Kapot. Surfer/skater/climber gypsy. Street elitist. Skates 3.5 hours on average daily.</TeacherBody>
        </Grid>
      </Container>
      <StyledSplashIllustrationTop src={SplashIllustrationTop} alt="" width={299} />
      <StyledSplashIllustrationBottom src={SplashIllustrationBottom} alt="" width={150} />
    </Section>
  )
})

export default SectionLearn
