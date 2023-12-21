// Modules
import Image from 'next/image'
import { memo } from 'react'

// Styles
import { ContainerLogo } from './styles'

// Types
import { ILogo } from './types'

const Logo = ({ src, height, width, alt }: ILogo) => (
  <ContainerLogo>
    <Image src={src} alt={alt} height={height} width={width} />
  </ContainerLogo>
)

export default memo(Logo)
