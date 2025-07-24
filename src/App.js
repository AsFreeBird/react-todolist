import TodoList from "./TodoList";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #eae0ff, #e0f7fa);
`;

function App() {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
