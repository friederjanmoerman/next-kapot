// Components
import { memo } from 'react'
import Button from '../Button'

// Types
import { ButtonScrollToProps } from './types'

const ButtonCtaScrollTo = ({ label, location, handleScrollTo }: ButtonScrollToProps) => (
  <Button onClick={handleScrollTo} href={location} label={label} />
)

export default memo(ButtonCtaScrollTo)
