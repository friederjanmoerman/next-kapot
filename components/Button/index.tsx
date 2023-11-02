import { StyledButton } from './styles'

const Button = ({ label, children, ...rest }) => (
  <StyledButton {...rest}>
    {label}
    {children}
  </StyledButton>
)

export default Button
