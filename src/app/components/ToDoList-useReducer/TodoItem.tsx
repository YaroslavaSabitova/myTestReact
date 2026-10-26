import { TodoModel } from './TodoModel';

import './styles.css';

interface TodoItemProps {
  todo: TodoModel;
  //   todos: TodoModel[];
  //   setTodos: (todos: TodoModel[]) => void;
  dispatch: React.Dispatch<any>;
}

// export const TodoItem = ({ todo, todos, setTodos }: TodoItemProps) => {
export const TodoItem = ({ todo, dispatch }: TodoItemProps) => {
  const { id, text } = todo;

  const onDeleteTodo = () => {
    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== id;
    // });

    // setTodos(newTodos);

    // Сообщаем редьюсеру: "Удали задачу с таким id"
    dispatch({ type: 'DELETE', payload: id });
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
