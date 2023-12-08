// Modules
import Image from 'next/image'

// Styles
import { ContainerLogo } from './styles'

// Types
import { ILogoProps } from './types'

const Logo = ({ src, height, width, alt }: ILogoProps) => (
  <ContainerLogo>
    <Image src={src} alt={alt} height={height} width={width} />
  </ContainerLogo>
)

export default Logo
