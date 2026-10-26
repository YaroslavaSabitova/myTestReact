import { TodoItem } from './TodoItem';
import { TodoModel } from './TodoModel';

import './styles.css';

interface TodoListProps {
  todos: TodoModel[];
  // setTodos: (todos: TodoModel[]) => void;
  dispatch: React.Dispatch<any>;
}

// export const TodoList = ({ todos, setTodos }: TodoListProps) => {
export const TodoList = ({ todos, dispatch }: TodoListProps) => {
  return (
    <ul className='list'>
      {todos.map((todo: TodoModel) => (
        // <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};
