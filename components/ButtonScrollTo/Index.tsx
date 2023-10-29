// MUI
import { Typography, Link } from "@mui/material"

// Types
import { IButtonScrollToProps } from "./types"

const ButtonScrollTo = ({ label, location, handleScrollTo }: IButtonScrollToProps) => (
  <Link onClick={handleScrollTo} href={location}>
    <Typography variant="h2">{label}</Typography>
  </Link>
)

export default ButtonScrollTo
