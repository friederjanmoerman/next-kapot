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
  <Section slim inverted>
    <Grid container rowSpacing={2} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Grid item>
        <Typography variant="h4">in collaboration with</Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 7, md: 4, lg: 7 }} alignItems={'center'} justifyContent={'center'}>
          <Grid item>
            <Logo src={LogoPowerslide} height={55} alt={'Logo Powerslide'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoGrindhouse} height={40} alt={'Logo Grindhouse'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoSkateheaven} height={65} alt={'Logo Skateheaven'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoKaltik} height={20} alt={'Logo Kaltik'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoFr} height={55} alt={'Logo FR Skates'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoMijnleuven} height={100} alt={'Logo Mijnleuven'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoSlidingtiger} height={75} alt={'Logo Sliding Tiger'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoPowsey} height={30} alt={'Logo Powsey'}></Logo>
          </Grid>
          <Grid item>
            <Logo src={LogoLetmeout} height={50} alt={'Logo Let Me Out'}></Logo>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Section>
)

export default SectionCollab
