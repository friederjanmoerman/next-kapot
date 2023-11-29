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

const SectionCollab = () => (
  <Section slim={true} inverted={true}>
    <Grid container rowSpacing={2} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Grid item>
        <Typography variant="h4">in collaboration with</Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 7, md: 4, lg: 7 }} alignItems={'center'} justifyContent={'center'}>
          <Grid item>
            <Logo src={LogoPowerslide} height={55}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoGrindhouse} height={40}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoSkateheaven} height={65}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoKaltik} height={20}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoFr} height={55}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoMijnleuven} height={100}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoSlidingtiger} height={75}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoPowsey} height={30}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoLetmeout} height={50}></Logo>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Section>
)

export default SectionCollab
