// компонент, отображающий электронные часы.
// эффект — не по клику, а по расписанию таймера.

// useEffect срабатывает после отрисовки

import { useEffect, useState, ReactElement } from 'react';

export const Time = (): ReactElement => {
  // Состояние time со значением new Date() — хранит «снимок» текущего времени.
  // Начальное состояние компонента и функция для изменения состояния
  // [текущееЗначение, функцияЧтобыЕгоИзменить] = вызов хука с начальным значением
  const [time, setTime] = useState(new Date());

  const [isRunning, setIsRunning] = useState(true);

  // useEffect с [] — запускает таймер один раз при появлении компонента.
  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setTime(new Date());
      //  каждые 1000 мс кладёт новое new Date() в состояние
    }, 1000);

    return () => {
      // очистка таймера при размонтировании,
      // чтобы таймер не висел в памяти
      clearInterval(timerId);
    };

    // [] (пустой массив), массив зависимостей — эффект выполнится один раз после первого рендера и больше никогда,
    //  т.е. таймер не будет пересоздан каждую секунду
  }, [isRunning]);
  // если без [], то эффект выполнится после каждого рендера (60 таймеров через минуту)
  // для таймеров, подписок и запросов «один раз при монтировании» — всегда [] пустой массив

  const handleStart = (): void => {
    setIsRunning(true);
  };

  const handleStop = (): void => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1 className='clock'>{time.toLocaleTimeString('ru-RU')}</h1>
      <div className='controls'>
        <button type='button' onClick={handleStart} disabled={isRunning}>
          Старт
        </button>
        <button type='button' onClick={handleStop} disabled={!isRunning}>
          Стоп
        </button>
      </div>
    </div>
  );
};
