// Components
import Teacher from './Teachers'

// Constants
import { constantsTeachers } from './constantsTeachers'

// Styles
import { Container } from '../../styles'

const ContainerTeachers = () => {
  return (
    <Container container spacing={10}>
      {constantsTeachers.map((data, index) => (
        <Teacher key={index} {...data} />
      ))}
    </Container>
  )
}

export default ContainerTeachers
