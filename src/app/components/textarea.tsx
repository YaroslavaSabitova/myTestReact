// контролируемые поля / управляемые компоненты

import { useState, ChangeEvent } from 'react';
// ChangeEvent — тип события изменения поля

export function NewMessage() {
  // нач значение value = ''
  // setValue - ф-ция, к-ая меняет value
  const [value, setValue] = useState('');

  function changeInput(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  // Обработчик изменения поля ввода обновляет состояние
  function changeArea(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  function resetValue() {
    setValue('');
  }

  return (
    <>
      {/* Значение элемента «привязывается» к значению состояния */}
      <input type='text' value={value} onChange={changeInput} />

      <textarea value={value} onChange={changeArea} />
      <button type='button' onClick={resetValue}>
        Очистить
      </button>
    </>
  );
}
