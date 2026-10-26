import { useEffect, useState, useContext } from 'react';

import { CurrentPlayingTrackContext } from './CurrentPlayingTrackContext';
import { TrackModel } from './models/Track';

import './styles.css';

interface PlayPauseProps {
  track: TrackModel;
}

export const PlayPause = ({ track }: PlayPauseProps) => {
  // Подключаемся к контексту (достаем глобальные данные, какой трек сейчас играет)
  const context = useContext(CurrentPlayingTrackContext);

  // Проверка на всякий случай, чтобы TypeScript не ругался
  if (!context) {
    throw new Error(
      'PlayPause должен использоваться внутри CurrentPlayingTrackContext.Provider'
    );
  }

  // Достаем данные из контекста
  const { currentPlayingTrack, setCurrentPlayingTrack } = context;

  // Локальное состояние: играет ли ИМЕННО ЭТОТ трек
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Если включили другой трек, этот ставим на паузу
  useEffect(() => {
    if (currentPlayingTrack && currentPlayingTrack.id !== track.id) {
      setIsPlaying(false);
    }
  }, [currentPlayingTrack, track.id]);

  const onclick = () => {
    // Если ничего не играет ИЛИ играет другой трек
    if (!currentPlayingTrack || currentPlayingTrack.id !== track.id) {
      // Говорим глобально: "теперь играет этот трек"
      setCurrentPlayingTrack(track);
      setIsPlaying(true);
      // Если играет ИМЕННО ЭТОТ трек, и он играет
    } else if (currentPlayingTrack && currentPlayingTrack.id === track.id && isPlaying) {
      // Ставим на паузу
      setIsPlaying(false);
    } else if (
      // Если играет ИМЕННО ЭТОТ трек, и он на паузе
      currentPlayingTrack &&
      currentPlayingTrack.id === track.id &&
      !isPlaying
    ) {
      // Включаем
      setIsPlaying(true);
    }
  };

  return (
    <button className='playPauseButton' onClick={onclick}>
      {isPlaying ? 'pause' : 'play'}
    </button>
  );
};
