import { useState } from 'react';

import { getRandomInt } from './getRandomInt';
import { TodoInput } from './ToDoInput';
import { TodoList } from './TodoList';
import { TodoModel } from './TodoModel';

import './styles.css';

const initialTodos: TodoModel[] = [
  {
    id: getRandomInt(),
    text: 'Полить цветы',
  },
  {
    id: getRandomInt(),
    text: 'Погулять в парке',
  },
  {
    id: getRandomInt(),
    text: 'Почитать книгу',
  },
];

export const ToDoList = () => {
  const [todos, setTodos] = useState<TodoModel[]>(initialTodos);
  return (
    <div className='container'>
      <h3>
        useReducer позволяет вынести всю&#160;логику работы с&#160;состоянием
        в&#160;отдельную функцию (редьюсер). Компоненты становятся &#171;глупыми&#187;:
        они&#160;просто&#160;говорят &#171;я&#160;хочу добавить задачу&#187; или
        &#171;я&#160;хочу удалить задачу&#187;,
        а&#160;как&#160;это&#160;сделать&#160;&#8212; решает редьюсер
      </h3>
      <div className='inner'>
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};
