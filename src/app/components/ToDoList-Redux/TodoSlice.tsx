// Slice - начальные данные и функции для их изменения.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getRandomInt } from './getRandomInt';
import { TodoModel } from './TodoModel';

// Начальное состояние
const initialState: TodoModel[] = [
  { id: getRandomInt(), text: 'Полить цветы' },
  { id: getRandomInt(), text: 'Погулять в парке' },
  { id: getRandomInt(), text: 'Почитать книгу' },
];

const todoSlice = createSlice({
  // имя слайса (для отслеживания в DevTools) и в TodoStore
  name: 'todos',

  // объект с начальным состоянием
  initialState,

  // редьюсер берёт текущие данные (нач состояние), инструкцию (экшены) и выдаёт новый результат через специальную команду dispatch()
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: getRandomInt(),
        text: action.payload,
      });
    },

    // удаляем по id (число)
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// экшены - инструкцию по эксплуатации редьюсера
export const { addTodo, deleteTodo } = todoSlice.actions;

// для TodoStore;
export const todoReducer = todoSlice.reducer;
