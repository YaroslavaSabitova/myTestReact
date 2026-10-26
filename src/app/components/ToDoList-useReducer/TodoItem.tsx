import { TodoModel } from './TodoModel';

import './styles.css';

interface TodoItemProps {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: (todos: TodoModel[]) => void;
}

export const TodoItem = ({ todo, todos, setTodos }: TodoItemProps) => {
  const { id, text } = todo;

  const onDeleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  return (
    <li className='todo-item'>
      <div>{text}</div>
      <button className='todo-delete-button' onClick={onDeleteTodo}>
        удалить
      </button>
    </li>
  );
};
