import { expect, test, jest } from '@jest/globals';

import { timer } from '../timer';

test('тест функции для отложенного выполнения колбека', () => {
  // мокаем функцию setTimeout, чтобы не ожидать 1000ms
  jest.useFakeTimers();
  // следим за выполнением setTimeout, вызывали её вообще или нет
  // globalThis — это глобальный объект (в браузере это window, в Node.js — global)
  jest.spyOn(globalThis, 'setTimeout');

  // jest.fn() создает пустую функцию-пустышку (мок), фейковый колбэк
  const callback = jest.fn();

  // запускаем функцию, передавая ей мок. Внутри timer сработает setTimeout(callback, 1000). Но так как таймеры фейковые, ничего не произойдет прямо сейчас, они просто "зарегистрируются" в памяти Jest.
  timer(callback);

  // благодаря spyOn можем проверить сколько раз был вызван setTimeout
  // Если функция timer написана правильно, то setTimeout должен быть вызван ровно 1 раз
  expect(setTimeout).toHaveBeenCalledTimes(1);

  // благодаря spyOn можем проверить с какими аргументами был вызван setTimeout
  // проверяем аргументы, с которыми был вызван таймер: последний вызов setTimeout должен был получить именно нашу функцию callback и именно число 1000
  expect(setTimeout).toHaveBeenLastCalledWith(callback, 1000);
});
