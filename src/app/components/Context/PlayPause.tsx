import { useEffect, useState, useContext } from 'react';

import { CurrentPlayingTrackContext } from './CurrentPlayingTrackContext';
import { TrackModel } from './models/Track';

import './styles.css';

interface PlayPauseProps {
  track: TrackModel;
}

export const PlayPause = ({ track }: PlayPauseProps) => {
  // Достаем контекст
  const context = useContext(CurrentPlayingTrackContext);

  // Проверка на всякий случай, чтобы TypeScript не ругался
  if (!context) {
    throw new Error(
      'PlayPause должен использоваться внутри CurrentPlayingTrackContext.Provider'
    );
  }

  // Деструктурируем данные из контекста
  const { currentPlayingTrack, setCurrentPlayingTrack } = context;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (currentPlayingTrack && currentPlayingTrack.id !== track.id) {
      setIsPlaying(false);
    }
  }, [currentPlayingTrack, track.id]);

  const onclick = () => {
    if (!currentPlayingTrack || currentPlayingTrack.id !== track.id) {
      setCurrentPlayingTrack(track);
      setIsPlaying(true);
    } else if (currentPlayingTrack && currentPlayingTrack.id === track.id && isPlaying) {
      setIsPlaying(false);
    } else if (
      currentPlayingTrack &&
      currentPlayingTrack.id === track.id &&
      !isPlaying
    ) {
      setIsPlaying(true);
    }
  };

  return (
    <button className='playPauseButton' onClick={onclick}>
      {isPlaying ? 'pause' : 'play'}
    </button>
  );
};
