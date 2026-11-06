import { configureStore } from '@reduxjs/toolkit';

//  редюсеры из трёх приложений
import tracksSliceReducer from './components/Async/slices/tracksSlice';
import { userReduсer } from './components/SavePassword/components/userSlice';
import { todoReducer } from './components/ToDoList-Redux/TodoSlice';

// один общий стор
export const store = configureStore({
  reducer: {
    tracks: tracksSliceReducer, // Ветка для Async-треков
    todos: todoReducer, // Ветка для ToDoList
    user: userReduсer, // Ветка для SavePassword
  },
});

//  общие типы  для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
