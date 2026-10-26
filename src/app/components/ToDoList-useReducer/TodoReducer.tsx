// Редьюсер — это чистая функция, которая принимает текущее состояние (state) и действие (action), а возвращает новое состояние.

import { getRandomInt } from './getRandomInt';
import { TodoModel } from './TodoModel';

//  типы действий (экшенов), которые могут произойти
export type TodoAction =
  | { type: 'ADD'; payload: string }
  | { type: 'DELETE'; payload: number };

//  сам редьюсер
export const todoReducer = (state: TodoModel[], action: TodoAction): TodoModel[] => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: getRandomInt(),
          text: action.payload, // текст новой задачи
        },
      ];

    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload);
    // payload тут — это id

    default:
      return state;
    // Если действие неизвестно — возвращаем состояние без изменений
  }
};
