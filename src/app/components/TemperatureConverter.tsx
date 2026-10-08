// если двум компонентам нужно одно и то же состояние, оно должно жить в их общем родителе, а не в каждом из них по отдельности

// F = C × 9/5 + 32

import { useState } from 'react';

const celsiusToFahrenheit = (c: number): number => (c * 9) / 5 + 32;
const fahrenheitToCelsius = (f: number): number => ((f - 32) * 5) / 9;

// Округление до 2 знаков после запятой
const round = (value: number): number => Math.round(value * 100) / 100;

// Парсит строку в число. Возвращает null, если это ещё не полное число
// (пустая строка, "-", ".", "25.")
const parseNumber = (value: string): number | null => {
  if (value === '' || value === '-' || value === '.') return null;
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
};

// число обратно в строку (без лишних нулей)
const formatNumber = (value: number): string => String(round(value));

// Проверяет, что ввод — валидное число или промежуточное состояние
// Разрешает: "", "-", "25", "25.", "25.5", "-3.14", ".5"
// Запрещает: буквы, несколько точек, пробелы
const isValidNumberInput = (value: string): boolean =>
  value === '' || /^-?\d*\.?\d*$/.test(value);

// родитель
export function TemperatureConverter() {
  // temperature = ''
  const [temperature, setTemperature] = useState('');

  const handleReset = (): void => {
    setTemperature('');
  };

  const isDisabled = temperature === '';

  return (
    <>
      <h3>Конвертер температуры</h3>
      {/* temperature={temperature} — текущее значение для отображения */}
      <CelsiusInput temperature={temperature} onTemperatureChange={setTemperature} />

      {/* onTemperatureChange={setTemperature} — функция, которую дети вызовут для изменения */}
      <FahrenheitInput temperature={temperature} onTemperatureChange={setTemperature} />

      <button type='button' onClick={handleReset} disabled={isDisabled}>
        Сбросить
      </button>
    </>
  );
}

// тип пропсов
type TemperatureInputProps = {
  temperature: string;

  // setTemperature из родителя
  onTemperatureChange: (value: string) => void;
};

// onChange → onTemperatureChange('25') → setTemperature('25') в родителе.
// Родитель перерисовывается.
// CelsiusInput получает temperature='25' → поле показывает «25».
// FahrenheitInput получает temperature='25' → пересчитывает Фаренгейт и показывает «77»
// одно изменение в поле Цельсия обновило оба поля
export function CelsiusInput({
  temperature,
  onTemperatureChange,
}: TemperatureInputProps) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (isValidNumberInput(value)) {
      onTemperatureChange(value);
    }
  };

  return (
    <label>
      Температура в Цельсиях:
      <input value={temperature} onChange={handleChange} />
      <span className='unit'>°C&#160;&#160;&#160;</span>
    </label>
  );
}

// принимаем пропс
export function FahrenheitInput({
  temperature,
  onTemperatureChange,
}: TemperatureInputProps) {
  // пересчитывается из Цельсия на каждый рендер
  const parsedCelsius = parseNumber(temperature);
  // вычисляем фаренгейт
  const fahrenheit =
    parsedCelsius === null ? '' : formatNumber(celsiusToFahrenheit(parsedCelsius));

  // вычисляем цельсий, если пользователь редактирует Фаренгейт
  const handleChange = (e) => {
    const value = e.target.value;

    if (!isValidNumberInput(value)) return;

    if (value === '') {
      onTemperatureChange('');
      return;
    }

    // Если пользователь ввёл "25." или "-" — пока не конвертируем
    const parsedF = parseNumber(value);
    if (parsedF === null) return;

    // Конвертируем обратно в Цельсии и отдаём наверх в родитель
    onTemperatureChange(formatNumber(fahrenheitToCelsius(parsedF)));
    // родитель обновляет temperature (новый цельсий);
    // CelsiusInput перерисовывается с новым значением Цельсия
  };

  return (
    <label>
      Температура в Фаренгейтах:
      {/* value={fahrenheit} — вычисленное значение, не состояние. */}
      {/* onChange={handleChange} — обработчик, который конвертирует в Цельсии. */}
      <input value={fahrenheit} onChange={handleChange} />
      <span className='unit'>°F&#160;&#160;&#160;</span>
    </label>
  );
}
