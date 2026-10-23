import { useEffect, useState } from 'react';

import { TrackModel } from './models/Track';

import './styles.css';

interface PlayPauseProps {
  track: TrackModel;
  currentPlayingTrack: TrackModel | null;
  setCurrentPlayingTrack: (currentPlayingTrackId: TrackModel) => void;
}
export const PlayPause = ({
  currentPlayingTrack,
  setCurrentPlayingTrack,
  track,
}: PlayPauseProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (currentPlayingTrack && currentPlayingTrack.id !== track.id) {
      setIsPlaying(false);
    }
  }, [currentPlayingTrack]);

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
