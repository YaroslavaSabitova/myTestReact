import { useState } from 'react';

enum TemperatureScale {
  CELCIUS = '°C',
  FAHRENHEIT = '°F',
}

type TTemperature = {
  // в какой шкале введено значение
  scale: TemperatureScale;

  // само введённое значение (строкой)
  temperature: string;
};

// convert (это toCelsius или toFahrenheit)
// классический паттерн для двусторонних форм: цена с НДС / без НДС, мили / километры, доллары / рубли. Везде, где два поля связаны формулой.
function tryConvert(temperature: string, convert: (_: number) => number) {
  // строку в число
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

type TTemperatureInputProps = {
  scale: TemperatureScale;
  temperature: string;
  onChange: (temperature: string) => void;
};

export const TemperatureInput = ({
  scale,
  temperature,
  onChange,
}: TTemperatureInputProps) => {
  return (
    <fieldset className='card'>
      <label className='label'>
        Введите температуру в {scale}:
        <input
          className='input'
          name='name'
          type='text'
          inputMode='numeric'
          value={temperature}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </fieldset>
  );
};

export const TemperatureConverter2 = () => {
  // из TTemperature
  const [{ scale, temperature }, setValue] = useState<TTemperature>({
    scale: TemperatureScale.CELCIUS,
    temperature: '',
  });

  const handleCelciusChange = (temperature: string) => {
    setValue({ scale: TemperatureScale.CELCIUS, temperature });
  };

  const handleFahrenheitChange = (temperature: string) => {
    setValue({ scale: TemperatureScale.FAHRENHEIT, temperature });
  };

  //   Если scale === FAHRENHEIT, значит пользователь редактирует поле Фаренгейта.
  // Значит, в temperature Фаренгейты, а не Цельсии.
  // Значит, для поля Цельсия нужно сконвертировать: tryConvert(temperature, toCelsius).
  const celsius =
    scale === TemperatureScale.FAHRENHEIT
      ? tryConvert(temperature, toCelsius)
      : temperature;

  //   Если scale !== FAHRENHEIT, то scale === CELCIUS. Пользователь редактирует поле Цельсия.
  // Значит, temperature уже в Цельсиях.
  // Отдаём как есть: temperature.
  const fahrenheit =
    scale === TemperatureScale.CELCIUS
      ? tryConvert(temperature, toFahrenheit)
      : temperature;

  return (
    <div className='page'>
      <h1>Конвертер температуры</h1>
      <div className='content'>
        <TemperatureInput
          scale={TemperatureScale.CELCIUS}
          temperature={celsius}
          onChange={handleCelciusChange}
        />
        <TemperatureInput
          scale={TemperatureScale.FAHRENHEIT}
          temperature={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};
