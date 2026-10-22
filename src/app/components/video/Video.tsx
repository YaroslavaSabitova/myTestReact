import { useEffect, useRef } from 'react';

import { Button } from './Button';
import { VideoPlayer } from './VideoPlayer';

export const Video = () => {
  // Создаем рефы для экземпляров классов
  // (тип указываем сам класс, так как ref будет ссылаться на инстанс компонента)
  const videoPlayerRef = useRef<VideoPlayer>(null);
  const playButtonRef = useRef<Button>(null);

  // Эффект для фокуса на кнопку Play при загрузке страницы
  useEffect(() => {
    playButtonRef.current?.setFocus();
  }, []);

  const onPlayButtonClick = (): void => {
    videoPlayerRef.current?.playVideo();
  };

  const onPauseButtonClick = (): void => {
    videoPlayerRef.current?.pauseVideo();
  };

  return (
    <div className='player-container'>
      <h3>привязываем реф к экземпляру React-компонента</h3>

      <div className='player-controls'>
        <Button
          ref={playButtonRef}
          text='Play'
          className='play-button'
          onClick={onPlayButtonClick}
        />

        <Button text='Pause' onClick={onPauseButtonClick} />
      </div>

      <VideoPlayer
        ref={videoPlayerRef}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        width='250'
        type='video/mp4'
      />
    </div>
  );
};
