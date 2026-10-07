// контролируемые поля / управляемые компоненты
// React управляет полями ввода, а не просто «подписывается» на них
// React хранит значение в состоянии и всегда знает, что в поле.

import { useState, ChangeEvent } from 'react';
// ChangeEvent — тип события изменения поля

export function OnlyDigits() {
  // нач значение value = ''
  // setValue - ф-ция, к-ая меняет value
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const onlyDigits = e.target.value.replace(/\D/g, '');
    setValue(onlyDigits);
  }

  function resetValue() {
    setValue('');
  }

  return (
    <>
      <h1>а здесь only digits</h1>

      {/* Значение элемента «привязывается» к значению состояния */}
      <input type='text' value={value} onChange={handleChange} />

      <button type='button' onClick={resetValue}>
        Очистить
      </button>
    </>
  );
}
