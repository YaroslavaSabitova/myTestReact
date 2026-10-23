import { useState } from 'react';

import { CurrentPlayingTrackContext } from './CurrentPlayingTrackContext';
import { Layout } from './Layout';
import { TrackModel } from './models/Track';
import { TrackList } from './TrackList';

const tracks: TrackModel[] = [
  {
    id: 1,
    title: 'Space Oddity',
    duration: '5:15',
  },
  {
    id: 2,
    title: 'The Man Who Sold The World',
    duration: '3:59',
  },
  {
    id: 3,
    title: 'Starman',
    duration: '4:14',
  },
];

export const Context = () => {
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<TrackModel | null>(
    null
  );

  return (
    <Layout>
      <h3>Context</h3>
      <h4>
        С помощью контекста мы можем поделиться нужными данными в одном из верхних
        компонентов и использовать их во вложенных.
      </h4>
      <CurrentPlayingTrackContext.Provider
        value={{ currentPlayingTrack, setCurrentPlayingTrack }}
      >
        <TrackList tracks={tracks} />
      </CurrentPlayingTrackContext.Provider>
    </Layout>
  );
};
