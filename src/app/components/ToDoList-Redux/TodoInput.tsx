import { ChangeEvent, FormEvent, useState } from 'react';

import { useAppDispatch } from './hooks';
import { addTodo } from './TodoSlice';

import './styles.css';

export const TodoInput = () => {
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (todoText !== '') {
      setTodoText('');
      // Отправляем экшен addTodo. В payload кладем текст
      dispatch(addTodo(todoText));
    }
  };

  return (
    <form onSubmit={onAddTodo} className='todo-form'>
      <input
        type='text'
        className='todo-input'
        placeholder='Введите todo...'
        onChange={onInputChange}
        value={todoText}
      />
      <button type='submit' className='todo-submit-button'>
        Добавить
      </button>
    </form>
  );
};
