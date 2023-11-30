// Styles
import { ContainerLogo, StyledLogo } from './styles'

// Types
import { ILogoProps } from './types'

import Image from 'next/image'

import KapotLogo from './../../../public/images/illustrations/logo--white.svg'

const Logo = ({ src, height, width, alt }: ILogoProps) => (
  <ContainerLogo>
    <Image src={src} alt={alt} height={height} width={width} />
  </ContainerLogo>
)

export const LogoKapot = ({ height, width }: ILogoProps) => (
  <ContainerLogo>
    <StyledLogo src={KapotLogo} alt={'Kapot logo'} height={height} width={width} />
  </ContainerLogo>
)

export default Logo
