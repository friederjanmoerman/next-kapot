// MUI
import { Typography, TypographyProps, styled } from '@mui/material'
import Grid from '@mui/material/Grid'

// Next
import Image from 'next/image'

export interface ISectionProps {
  inverted?: boolean
  slim?: boolean
}

export const Section = styled(Grid)<ISectionProps>(
  ({ theme, inverted, slim }) => `
    && {
    position: relative;
    padding: 180px 14% 200px;

    ${
      inverted &&
      `
        background: ${theme.palette.common.black};
        h2, h3, h4, h5 {
          color: ${theme.palette.common.white};
        }
      `
    }

    padding: 180px 14% 200px;

    ${
      slim &&
      `
      padding: 70px 14% 120px;
      `
    }

    }
  `,
)

export const SectionSubtitle = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    && {
      font-family: FuturaStdCondensedExtraBd, sans-serif;
      text-transform: uppercase;
      font-size: 51px;
      margin-top: 90px;
    }
  `,
)

export const SectionSubtitleEmphasis = styled('span')(
  ({ theme }) => `
    && {
      font-family: FuturaStdCondExtraBoldObl, sans-serif;
      color: ${theme.palette.primary.main};
    }
  `,
)

export const Container = styled(Grid)`
  margin-top: 0;
`

export const ItemTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    text-transform: uppercase;
  `,
)

export const ItemPrice = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    && {
      text-transform: capitalize;
      margin: 24px 0;
    }
  `,
)

export const ItemMeta = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    && {
      text-transform: uppercase;
      font-size: 14px;
      font-family: FuturaStdCondExtraBoldObl, sans-serif;
    }
  `,
)

export const TeacherTitle = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    && {
      font-size: 70px;
      color: ${theme.palette.primary.main};
    }
  `,
)

export const TeacherTag = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    && {
      margin: 20px 0 10px;
      text-transform: uppercase;
      font-family: FuturaStdCondensedExtraBd, sans-serif;
    }
  `,
)

export const TeacherBody = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    && {
      margin: 20px 0px;
    }
  `,
)

export const StyledSplashIllustrationTop = styled(Image)`
  position: absolute;
  top: -5%;
  right: 0;
  z-index: 8000;
`

export const StyledSplashIllustrationBottom = styled(Image)`
  position: absolute;
  left: 0;
  bottom: 20%;
  z-index: 8000;
`

export const StyledSplashIllustrationBottomVariation1 = styled(Image)`
  position: absolute;
  left: 0;
  top: 7%;
  z-index: -1;
`
