// Styles
import { ContainerLogo, StyledLogo } from './styles'

// Types
import { ILogoProps } from './types'

const Logo = ({ src, height, width, alt }: ILogoProps) => (
  <ContainerLogo>
    <StyledLogo src={src} alt={alt} height={height} width={width} />
  </ContainerLogo>
)

export default Logo
