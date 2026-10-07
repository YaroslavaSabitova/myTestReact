// Обработка нескольких полей одним обработчиком

import { useState } from 'react';

import type { ChangeEvent } from 'react';

export const Subscribe = () => {
  const [state, setState] = useState({
    // Соответствует полю ввода subscribed
    subscribed: false,
    // Соответствует полю ввода email
    email: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    // Определяем, откуда пришло событие: из чекбокса или текстового поля ввода
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Применяем вычисляемые имена свойств
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <form>
      <h3>Обработка нескольких полей одним обработчиком</h3>
      <label>
        Получать уведомления
        <input
          name='subscribed'
          type='checkbox'
          checked={state.subscribed}
          onChange={handleInputChange}
        />
      </label>
      <label>
        E-mail:
        <input
          disabled={!state.subscribed}
          name='email'
          type='text'
          value={state.email}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};
