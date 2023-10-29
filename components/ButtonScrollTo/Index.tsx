import { Link } from "react-router-dom"
import { Typography } from "@mui/material"

interface IButtonScrolltoProps {
  to: string
  label: string
}

const ButtonScrollTo = ({ label, to }: IButtonScrolltoProps) => (
  <Link to={to}>
    <Typography variant="h2">{label}</Typography>
  </Link>
)

export default ButtonScrollTo
