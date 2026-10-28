import { useAppDispatch } from './hooks';
import { TodoModel } from './TodoModel';
import { deleteTodo } from './TodoSlice';

import './styles.css';

interface TodoItemProps {
  todo: TodoModel;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const { id, text } = todo;

  const onDeleteTodo = () => {
    // Отправляем экшен deleteTodo. В payload кладем id
    dispatch(deleteTodo(id));
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
