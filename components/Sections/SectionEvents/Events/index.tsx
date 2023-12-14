// Components
import Events from './Events'

// Constants
import { constantsEvents } from './constantsEvents'

// Styles
import { Container } from '../../styles'

const ContainerEvents = () => {
  return (
    <Container container spacing={7}>
      {constantsEvents.map((data, index) => (
        <Events key={index} {...data} />
      ))}
    </Container>
  )
}

export default ContainerEvents
