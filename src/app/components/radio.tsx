// У радиокнопки value — это её собственное значение.
// А checked — это булево: выбрана она или нет.

import { useState, ChangeEvent, SyntheticEvent } from 'react';

export const Radio = () => {
  type Mode = 'light' | 'dark';
  const [mode, setMode] = useState<Mode>('dark');

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    //  кнопка, которую выбрали, и её значение
    setMode(e.target.value);
  };

  const formSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(mode);
  };

  return (
    <form onSubmit={formSubmit}>
      <div className='radio'>
        <label>
          <input
            type='radio'
            value='light'
            checked={mode === 'light'}
            // Без onChange радиокнопка станет только для чтения — пользователь не сможет её переключить
            onChange={onValueChange}
          />
          Светлая тема
        </label>
      </div>
      <div className='radio'>
        <label>
          <input
            type='radio'
            value='dark'
            checked={mode === 'dark'}
            onChange={onValueChange}
          />
          Тёмная тема
        </label>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};
