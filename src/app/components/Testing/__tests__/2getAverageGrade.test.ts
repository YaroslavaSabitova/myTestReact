import { expect, test, jest } from '@jest/globals';

import { getAverageGrade } from '../getAverageGrade';
// импорт всего модуля как объекта  , чтобы получить доступ к его методам
import * as gradesApi from '../getGrades';

test('тест расчета средней оценки студента', async () => {
  // оборачиваем оригинальную функцию в специальную обертку spyOn.
  // spyOn действует только там, где он объявлен (внутри блока test или describe). После выхода из теста оригинальная функция возвращается

  // .mockImplementation - пока тест идет, НЕ выполняй оригинал, а возвращай вот эти фейковые данные
  const getGradesMock = jest.spyOn(gradesApi, 'getGrades').mockImplementation(() =>
    Promise.resolve({
      math: 5,
      programming: 5,
      physics: 5,
    })
  );

  const averageGrade = await getAverageGrade(1);

  // проверяем, что getAverageGrade действительно обратилась к getGrades
  expect(getGradesMock).toHaveBeenCalled();
  expect(averageGrade).toBe(5);
});

// jest.spyOn() - более чистый и точечный подход. Подходит, когда нужно подменить только один метод (например, функцию запроса к серверу), но оставить остальную логику модуля нетронутой. Также spyOn незаменим, если нужно проверить, что функция вообще была вызвана (как в toHaveBeenCalled() и знать, сколько раз её вызвали, с какими аргументами).
