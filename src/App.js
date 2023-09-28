import Form from "./Form";
import Clock from "./Clock";
import { Container } from "./Container/styled"

const App = () => {
  return (
    <Container>
      <Form>
        <Clock />
      </Form>
    </Container>
  );
};

export default App;

