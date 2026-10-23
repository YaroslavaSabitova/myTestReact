import { createContext } from 'react';

import { TrackModel } from './models/Track';

// Описываем, что будет лежать в контексте
export interface CurrentPlayingTrackContextType {
  currentPlayingTrack: TrackModel | null;
  setCurrentPlayingTrack: (track: TrackModel) => void;
}

// Создаем сам контекст. По умолчанию null.
export const CurrentPlayingTrackContext =
  createContext<CurrentPlayingTrackContextType | null>(null);
