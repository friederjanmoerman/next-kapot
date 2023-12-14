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
import ContainerTeachers from './Teachers'

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
      <ContainerTeachers />
      <StyledSplashIllustrationTop src={SplashIllustrationTop} alt="" width={299} />
      <StyledSplashIllustrationBottom src={SplashIllustrationBottom} alt="" width={150} />
    </Section>
  )
})

export default SectionLearn
