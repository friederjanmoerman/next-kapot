// MUI
import { Link, styled } from "@mui/material"

export const SectionFooter = styled("footer")(
  ({ theme }) => `
    && {
    position: relative;
    background: ${theme.palette.primary.main};
  `
)

export const StyledLinkIcon = styled(Link)(
  ({ theme }) => `
      && {
      background: ${theme.palette.common.black};
      color: ${theme.palette.common.white};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: all 0.4s ease-out;
      height: 30px;
      width: 30px;

      :hover, :active, :focus {
        color: ${theme.palette.primary.main};
      }
    `
)
