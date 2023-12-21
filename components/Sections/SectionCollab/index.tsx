// MUI
import { Grid, Typography } from '@mui/material'

// Components
import Logo from '../../Icons/Logo'

// Constants
import { logosBrands } from './constantsLogosBrands'

// Styles
import { Section } from '../styles'

const SectionCollab = () => (
  <Section className="slim inverted">
    <Grid container rowSpacing={2} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Grid item>
        <Typography variant="h4">in collaboration with</Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={{ xs: 1, md: 2, lg: 4 }} columnSpacing={{ xs: 4, md: 4, lg: 7 }} alignItems={'center'} justifyContent={'center'}>
          {logosBrands.map((logo, index) => (
            <Grid item key={index}>
              <Logo src={logo.src} height={logo.height} alt={logo.alt}></Logo>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Section>
)

export default SectionCollab
