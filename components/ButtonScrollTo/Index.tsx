import { Typography, Link } from "@mui/material"

interface IButtonScrolltoProps {
  to: string
  label: string
}

const ButtonScrollTo = ({ label, to }: IButtonScrolltoProps) => (
  <Link href={to}>
    <Typography variant="h2">{label}</Typography>
  </Link>
)

export default ButtonScrollTo
