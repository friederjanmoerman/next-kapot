import { Link } from "react-scroll"
import { Typography } from "@mui/material"

interface IButtonScrolltoProps {
  to: string
  label: string
}

const ButtonScrollTo = ({ label, to }: IButtonScrolltoProps) => (
  <Link to={to} spy={true} smooth={true} offset={-70} duration={500}>
    <Typography variant="h2">{label}</Typography>
  </Link>
)

export default ButtonScrollTo
