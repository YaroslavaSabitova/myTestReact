import { test, expect } from '@playwright/test';

// команда test объявляет отдельный e2e-тест. В аргументы передается объект page — это страница браузера, с которой взаимодействуем.
test('счётчик должен увеличиваться и уменьшаться', async ({ page }) => {
  // Открываем главную страницу
  // baseURL из конфига
  await page.goto('/');

  // page.getByTestId('count') — находит элемент по атрибуту data - testid.

  // Проверяем начальное значение
  await expect(page.getByTestId('count')).toHaveText('Счёт: 0');

  // page.getByRole('button', { name: /увеличить/i }) - находит кнопку по роли и тексту
  // await ... .click() — кликает по элементу.
  // await expect(...).toHaveText('...') — проверяет текст элемента.

  // Кликаем на "Увеличить"
  await page.getByRole('button', { name: /увеличить/i }).click();
  await expect(page.getByTestId('count')).toHaveText('Счёт: 1');

  // Кликаем ещё раз
  await page.getByRole('button', { name: /увеличить/i }).click();
  await expect(page.getByTestId('count')).toHaveText('Счёт: 2');

  // Кликаем на "Уменьшить"
  await page.getByRole('button', { name: /уменьшить/i }).click();
  await expect(page.getByTestId('count')).toHaveText('Счёт: 1');

  // Сбрасываем
  await page.getByRole('button', { name: /сбросить/i }).click();
  await expect(page.getByTestId('count')).toHaveText('Счёт: 0');
});
