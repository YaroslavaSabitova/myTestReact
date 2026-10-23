import clsx from 'clsx';

import { TrackModel } from './models/Track';
import { PlayPause } from './PlayPause';

import './styles.css';

export interface TrackProps {
  track: TrackModel;
  currentPlayingTrack: TrackModel | null;
  setCurrentPlayingTrack: (currentPlayingTrack: TrackModel) => void;
}

export const Track = ({
  track,
  currentPlayingTrack,
  setCurrentPlayingTrack,
}: TrackProps) => {
  const { duration, id, title } = track;

  return (
    <div className={clsx('trackRoot', 'typo')}>
      <div className='trackId'>{id}</div>
      <PlayPause
        track={track}
        currentPlayingTrack={currentPlayingTrack}
        setCurrentPlayingTrack={setCurrentPlayingTrack}
      />
      <div className={clsx('trackContent', 'typo')}>
        <div className='trackTitle'>{title}</div>
        <div className='trackDurationContainer'>
          <span className='trackDuration'>{duration}</span>
        </div>
      </div>
    </div>
  );
};
