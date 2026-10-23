import { TrackModel } from './models/Track';
import { Track } from './Track';

import './styles.css';

interface TrackListProps {
  tracks: TrackModel[];
}

export const TrackList = ({ tracks }: TrackListProps) => {
  return (
    <div className='trackList'>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};
