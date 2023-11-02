// MUI
import { Link, styled } from '@mui/material'

export const SectionFooter = styled('footer')(
  ({ theme }) => `
    && {
    position: relative;
    background: ${theme.palette.primary.main};
    padding: 70px 0 140px;
  `,
)

export const StyledLinkIcon = styled(Link)(
  ({ theme }) => `
      && {
      color: ${theme.palette.common.black};
      display: flex;
      transition: all 0.4s ease-out;
      margin: 6px;
    `,
)
