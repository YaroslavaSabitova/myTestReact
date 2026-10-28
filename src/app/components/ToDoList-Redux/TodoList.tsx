import { useAppSelector } from './hooks';
import { TodoItem } from './todoItem';
import { TodoModel } from './TodoModel';

import './styles.css';

export const TodoList = () => {
  // Достаем массив из Store
  const todos = useAppSelector((state) => state.todos);

  return (
    <ul className='list'>
      {todos.map((todo: TodoModel) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
