import { configureStore } from '@reduxjs/toolkit';

//  редюсеры из обоих приложений
import tracksSliceReducer from './components/Async/slices/tracksSlice';
import { todoReducer } from './components/ToDoList-Redux/TodoSlice';

// один общий стор
export const store = configureStore({
  reducer: {
    tracks: tracksSliceReducer, // Ветка для Async-треков
    todos: todoReducer, // Ветка для ToDoList
  },
});

//  общие типы  для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
