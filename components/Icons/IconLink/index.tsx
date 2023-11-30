import { SvgIconProps, IconButton } from '@mui/material'

interface IconLinkProps {
  href: string
  icon: React.ReactElement<SvgIconProps>
}

const IconLink = ({ href, icon }: IconLinkProps) => (
  <IconButton href={href} target="_blank" rel="noopener noreferrer">
    {icon}
  </IconButton>
)

export default IconLink
