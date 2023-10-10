import { StyledButton, IButtonProps } from "./styles"

const Button = ({ label, children, ...rest }: IButtonProps) => (
  <StyledButton {...rest}>
    {label}
    {children}
  </StyledButton>
)

export default Button
