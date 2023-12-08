// Components
import Button from '../Button'

// Types
import { IButtonScrollToProps } from './types'

const ButtonCtaScrollTo = ({ label, location, handleScrollTo }: IButtonScrollToProps) => (
  <Button onClick={handleScrollTo} href={location} label={label}></Button>
)

export default ButtonCtaScrollTo
