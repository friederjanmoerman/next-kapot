import { StyledButton } from './styles'

const Button = ({ label, ...rest }) => <StyledButton {...rest}>{label}</StyledButton>

export default Button
