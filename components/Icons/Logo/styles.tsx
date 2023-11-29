import { styled } from '@mui/material'

// Next
import Image from 'next/image'

export const ContainerLogo = styled('div')`
  position: relative;
  z-index: 9003;
`

export const StyledLogo = styled(Image)(
  ({ theme }) => `
    ${theme.breakpoints.down('lg')} {
     height: 135px;
    }
  `,
)
