import { ContainerLogo } from './styles'

// Next
import Image from 'next/image'

// Images
import KapotLogo from './../../../public/images/illustrations/logo--white.svg'

const Logo = () => {
  return (
    <ContainerLogo>
      <Image src={KapotLogo} alt="Kapot Logo" height={150} />
    </ContainerLogo>
  )
}

export default Logo
