// MUI
import { Grid, Typography } from '@mui/material'
import { SectionFooter } from './../styles'
import Logo from '../../icons/Logo'
import { forwardRef } from 'react'

import SocialsBar from '../../SocialsBar'

import KapotLogo from './../../../public/images/illustrations/logo--white.svg'

const Footer = forwardRef<HTMLDivElement>(function Footer(_, ref) {
  return (
    <SectionFooter ref={ref}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" flexDirection={'column'}>
            <Grid item>
              <Logo src={KapotLogo} height={150} alt={'Kapot logo'} />
            </Grid>
            <Grid item>
              <Typography variant={'h1'}>Kapot</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <Typography fontSize={'34px'} variant="h3">
              kapot@echtalleskapot.be
            </Typography>
          </Grid>
        </Grid>
        <SocialsBar />
      </Grid>
    </SectionFooter>
  )
})

export default Footer
