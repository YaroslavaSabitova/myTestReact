// проверить
// мокирование таймеров перед выполнением теста
// восстановление таймеров после выполнения теста
// перемотку времени таймеров вперед, чтобы тест не выполнялся слишком долго
// , что функция alert будет вызвана с корректным текстом сообщения

import { jest, test, expect, beforeEach, afterEach, describe } from '@jest/globals';

import { showPromotionBanner } from '../showPromotionBanner';

describe('Тестирование функции showPromotionBanner', () => {
  // 1. Перед каждым тестом включаем фейковые таймеры и мокаем alert
  beforeEach(() => {
    jest.useFakeTimers();
    // В Node.js (где работает Jest) нет нативного alert,
    // поэтому мы создаем для него заглушку (мок)
    jest.spyOn(globalThis, 'alert').mockImplementation(() => {});
  });

  // 2. После каждого теста возвращаем всё как было, чтобы фейковые таймеры НЕ сломали другие тесты в этом же файле, которым нужно реальное время
  afterEach(() => {
    jest.useRealTimers(); // Возвращаем реальные таймеры
    jest.restoreAllMocks(); // Убираем мок с alert
  });

  test('должна вызывать alert с правильным текстом ровно через 15 секунд', () => {
    const testText = 'Скидка 50%!';

    // Следим за функцией alert
    const alertSpy = jest.spyOn(globalThis, 'alert');

    // Вызываем тестируемую функцию
    showPromotionBanner(testText);

    // Проверяем, что сразу alert НЕ вызвался
    expect(alertSpy).not.toHaveBeenCalled();

    // 3. Перематываем время вперед на 15000 миллисекунд (15 секунд)
    jest.advanceTimersByTime(15000);

    // 4. Проверяем, что alert сработал с нужным текстом
    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith(testText);
  });
});
