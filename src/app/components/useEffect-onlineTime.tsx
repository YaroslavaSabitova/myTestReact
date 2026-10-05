// компонент, отображающий электронные часы.
// эффект — не по клику, а по расписанию таймера.

import { useEffect, useState, ReactElement } from 'react';

export const Time = (): ReactElement => {
  // Состояние time со значением new Date() — хранит «снимок» текущего времени.
  const [time, setTime] = useState(new Date());

  // useEffect с [] — запускает таймер один раз при появлении компонента.
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
      //  каждые 1000 мс кладёт новое new Date() в состояние
    }, 1000);

    return () => {
      // очистка таймера при размонтировании
      clearInterval(timerId);
    };

    // [] (пустой массив), массив зависимостей — эффект выполнится один раз после первого рендера и больше никогда,
    //  т.е. таймер не будет пересоздан каждую секунду
  }, []);
  // если без [], то эффект выполнится после каждого рендера (60 таймеров через минуту)
  // для таймеров, подписок и запросов «один раз при монтировании» — всегда [] пустой массив

  // const format = (date: Date): string => {
  //   const hh = String(date.getHours()).padStart(2, '0');
  //   const mm = String(date.getMinutes()).padStart(2, '0');
  //   const ss = String(date.getSeconds()).padStart(2, '0');
  //   return `${hh}:${mm}:${ss}`;
  // };

  //   date.getHours() возвращает число, например 5 (не 05).
  // String(5) → "5".
  // .padStart(2, '0') → добавляет нули слева до длины 2 → "05".
  // Собираем в строку "05:03:09".

  return (
    <div>
      {/* <h1 className='clock'>{format(time)}</h1> */}
      <h1 className='clock'>{time.toLocaleTimeString('ru-RU')}</h1>
    </div>
  );
};
