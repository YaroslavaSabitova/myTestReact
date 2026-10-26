// Кастомный хук

import { useRef, useState } from 'react';

import { CounterService } from './CounterServise';

export const useCounter = () => {
  // useRef — чтобы создать экземпляр CounterService один раз при первом рендере и не пересоздавать его заново при каждом обновлении экрана(иначе он будет сбрасываться на 1)

  // useRef гарантирует, что класс создастся только один раз и не удалился при перерисовках
  const serviceRef = useRef<CounterService>(new CounterService());

  // Берем начальное значение из внешнего сервиса
  // useState — чтобы React знал, когда значение в классе изменилось, и перерисовал интерфейс
  const [counter, setCounter] = useState<number>(serviceRef.current.getCounter());

  //  Функции-обертки. Они вызывают метод в классе и обновляют состояние React
  const increment = () => {
    // Обращаемся к внешнему сервису
    serviceRef.current.increment();

    // Обновляем React-состояние
    setCounter(serviceRef.current.getCounter());
  };

  const decrement = () => {
    serviceRef.current.decrement();
    setCounter(serviceRef.current.getCounter());
  };

  const double = () => {
    serviceRef.current.double();
    setCounter(serviceRef.current.getCounter());
  };

  const divide = () => {
    serviceRef.current.divide();
    setCounter(serviceRef.current.getCounter());
  };

  //  Возвращаем всё наружу, чтобы компонент мог этим пользоваться
  return { counter, increment, decrement, double, divide };
};
