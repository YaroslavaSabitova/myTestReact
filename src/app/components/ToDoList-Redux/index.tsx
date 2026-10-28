import { TodoInput } from './TodoInput';
import { TodoList } from './ToDoList';

import './styles.css';

export const TodoListRedux = () => {
  return (
    <div className='container'>
      <h3>Список задач (To-Do) на Redux</h3>
      <div className='inner'>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};
