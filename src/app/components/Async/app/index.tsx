import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '../../../commonStore';
// import { AppDispatch } from '../store/store';
import { Layout } from '../components/Layout';
import { TrackList } from '../components/TrackList';
import { fetchTracks } from '../slices/tracksSlice';

export const Async = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Достаем данные напрямую из глобального стейта
  const tracks = useSelector((state: RootState) => state.tracks.tracks);
  const isLoading = useSelector((state: RootState) => state.tracks.isLoading);

  // Отправляем асинхронный экшен при монтировании
  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  return (
    <Layout>
      <h3>асинхронные запросы при помощи createAsyncThunk</h3>
      <TrackList tracks={tracks} isLoading={isLoading} />
    </Layout>
  );
};
