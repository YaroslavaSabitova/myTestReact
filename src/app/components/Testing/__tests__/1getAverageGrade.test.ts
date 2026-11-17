import { expect, test, jest } from '@jest/globals';

import { getAverageGrade } from '../getAverageGrade';
import { getGrades } from '../getGrades';

// заменить весь модуль на мок
jest.mock('../getGrades');
//  всё, что импортирует getAverageGrade, получит не настоящую функцию getGrades, а автоматическую заглушку (пустую функцию)

// когда вызов getGrades, верни Promise с объектом оценок
(getGrades as jest.Mock).mockImplementation(() =>
  Promise.resolve({
    math: 5,
    programming: 5,
    physics: 5,
  })
);

test('тест расчета средней оценки студента', async () => {
  const averageGrade = await getAverageGrade(1);

  expect(averageGrade).toBe(5);
});

// Мок действует на весь файл с тестами. Если ниже будет еще 10 тестов, они все будут использовать этот фейковый getGrades

// jest.mock() лучше использовать, когда модуль очень тяжелый, тянет за собой другие зависимости (картинки, стили, другие модули) или когда надо замокать API на весь файл тестов
