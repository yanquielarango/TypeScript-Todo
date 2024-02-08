import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { useTodoContext} from './context/todoContext'


export const App = () => {
  const {todos} = useTodoContext()
  return (
   <>
   <h1>Todos</h1>
    <AddTodo/>
    <Todos/>
   </>
  );
};
