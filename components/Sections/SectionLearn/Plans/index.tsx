// Components
import Plans from './Plans'

// Constants
import { constantsPlans } from './constantsPlans'

// Styles
import { Container } from '../../styles'

const ContainerPlans = () => {
  return (
    <Container container spacing={10}>
      {constantsPlans.map((data, index) => (
        <Plans key={index} {...data} />
      ))}
    </Container>
  )
}

export default ContainerPlans
