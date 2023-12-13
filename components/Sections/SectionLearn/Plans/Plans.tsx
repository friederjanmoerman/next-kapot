// Modules
import { memo } from 'react'

// MUI
import { Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { AutoAwesome } from '@mui/icons-material'

// Components
import Button from './../../../Button'

// Styles
import { ItemPrice, ItemTitle, StyledList } from '../../styles'

// Types
import { PlanProps } from './types'

const Plans = (props: PlanProps) => {
  const { title, price, description, list, buttonLink, buttonLabel } = props
  return (
    <Grid item md={6} lg={6}>
      <ItemTitle variant="h1" component="h2">
        {title}
      </ItemTitle>
      <ItemPrice as="h3" variant="h4">
        {price}
      </ItemPrice>
      <Typography variant="h5">{description}</Typography>
      <StyledList dense>
        {list.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <AutoAwesome />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </StyledList>
      <Button href={buttonLink} inverted variant="contained" size="large" disableElevation label={buttonLabel} />
    </Grid>
  )
}

export default memo(Plans)
