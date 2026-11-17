import { getGrades } from './getGrades';

// getAverageGrade — функция для расчета средней оценки студента по всем предметам. Внутри себя для получения всех оценок она использует функцию getGrades, которая выполняет сетевой запрос на сервер.

export async function getAverageGrade(studentId: number): Promise<number> {
  const gradesMap = await getGrades(studentId);

  const grades: number[] = Object.values(gradesMap);
  const sumOfGrades = grades.reduce((acc, value) => acc + value, 0);
  const result = sumOfGrades / grades.length;
  return result;
}
