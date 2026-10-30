import { configureStore } from '@reduxjs/toolkit';

import tracksSliceReducer from '../slices/tracksSlice';

export const store = configureStore({
  reducer: {
    tracks: tracksSliceReducer,
  },
});

//  общие типы  для useSelector и useDispatch

// RootState и AppDispatch в commonStore
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
