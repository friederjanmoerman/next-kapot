import { Grid, Typography } from '@mui/material'
import { Section } from '../styles'
import Logo from '../../icons/Logo'

import LogoPowerslide from './../../../public/images/illustrations/sponsor__powerslide.svg'
import LogoGrindhouse from './../../../public/images/illustrations/sponsor__grindhouse.svg'
import LogoSkateheaven from './../../../public/images/illustrations/sponsor__skateheaven.svg'
import LogoKaltik from './../../../public/images/illustrations/sponsor__kaltik.svg'
import LogoFr from './../../../public/images/illustrations/sponsor__fr.svg'
import LogoMijnleuven from './../../../public/images/illustrations/sponsor__mijnleuven.svg'
import LogoSlidingtiger from './../../../public/images/illustrations/sponsor__sliding-tiger.svg'
import LogoPowsey from './../../../public/images/illustrations/sponsor__powsey.svg'
import LogoLetmeout from './../../../public/images/illustrations/sponsor__let-me-out.svg'

const SectionEvents = () => (
  <Section inverted={true}>
    <Grid container alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Grid item>
        <Typography variant="h4">in collaboration with</Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems={'center'} justifyContent={'center'}>
          <Logo src={LogoPowerslide} height={55}></Logo>
          <Logo src={LogoGrindhouse} height={40}></Logo>
          <Logo src={LogoSkateheaven} height={65}></Logo>
          <Logo src={LogoKaltik} height={20}></Logo>
          <Logo src={LogoFr} height={55}></Logo>
          <Logo src={LogoMijnleuven} height={100}></Logo>
          <Logo src={LogoSlidingtiger} height={75}></Logo>
          <Logo src={LogoPowsey} height={30}></Logo>
          <Logo src={LogoLetmeout} height={50}></Logo>
        </Grid>
      </Grid>
    </Grid>
  </Section>
)

export default SectionEvents
