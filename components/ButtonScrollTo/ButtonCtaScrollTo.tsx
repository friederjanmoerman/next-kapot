// Components
import { memo } from 'react'
import Button from '../Button'

// Types
import { IButtonScrollTo } from './types'

const ButtonCtaScrollTo = ({ label, location, handleScrollTo }: IButtonScrollTo) => <Button onClick={handleScrollTo} href={location} label={label} />

export default memo(ButtonCtaScrollTo)
