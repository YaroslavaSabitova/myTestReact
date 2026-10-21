import { useState, MouseEvent } from 'react';

export const BtnCaptureEvent = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const onCounterClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const onCounterToggleClick = () => {
    setIsBlocked(!isBlocked);
  };

  const captureClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isBlocked) {
      console.log('isBlocked = ', isBlocked);
      // Останавливаем событие клик на фазе захвата — до кнопки оно не дойдёт, счётчик нельзя увеличить
      e.stopPropagation();
    }
  };

  return (
    <>
      <h3>Нажатие на кнопку управляет счётчиком</h3>
      <div>{`Счетчик: ${counter}`}</div>

      <button onClickCapture={captureClick} onClick={onCounterClick}>
        Увеличить счетчик на 1
      </button>

      <button onClick={onCounterToggleClick}>
        {isBlocked ? 'Разблокировать' : 'Заблокировать'}
      </button>
    </>
  );
};
