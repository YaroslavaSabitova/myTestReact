import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getTracks } from '../api/getTracks';
import { TrackModel } from '../models/Track';

import type { PayloadAction } from '@reduxjs/toolkit';

// Создаем асинхронный экшен
export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async () => {
  const response = await getTracks();
  return response;
});

interface TrackListState {
  tracks: TrackModel[];
  isLoading: boolean;
}

const initialState: TrackListState = {
  tracks: [],
  isLoading: true, // Изначально загрузка идет
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<TrackModel>) {
      const { id } = action.payload;
      const trackToLike = state.tracks.find((track) => track.id === id);
      if (trackToLike) {
        trackToLike.isLiked = !trackToLike.isLiked;
      }
    },
  },
  // Обработка асинхронного экшена
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tracks = action.payload; // Сохраняем данные
      })
      .addCase(fetchTracks.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectTracks: (sliceState) => sliceState.tracks,
    selectIsLoading: (sliceState) => sliceState.isLoading,
  },
});

export const { selectTracks, selectIsLoading } = tracksSlice.selectors;
export const { toggleLike } = tracksSlice.actions;
export default tracksSlice.reducer;
