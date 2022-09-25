import { TodoListStyle } from "./styled";
import TodoBox from "./components/organisms/todoBox";

const App = () => {
  return (
    <TodoListStyle>
      <TodoBox></TodoBox>
    </TodoListStyle>
  );
};

export default App;