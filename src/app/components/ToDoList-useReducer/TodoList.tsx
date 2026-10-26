import { TodoItem } from './TodoItem';
import { TodoModel } from './TodoModel';

import './styles.css';

interface TodoListProps {
  todos: TodoModel[];
  setTodos: (todos: TodoModel[]) => void;
}

export const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <ul className='list'>
      {todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
};
