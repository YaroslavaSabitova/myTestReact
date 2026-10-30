// Store — это глобальный объект, где лежат все данные.

import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './TodoSlice';

export const store = configureStore({
  reducer: {
    // todos — то, как будут называться данные в глобальном Store
    todos: todoReducer,
  },
});

// Типы для TypeScript (чтобы хуки знали, какие данные лежат в Store)
//  общие типы  для useSelector и useDispatch

// RootState и AppDispatch в commonStore
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
