/* eslint-disable @typescript-eslint/no-unsafe-call */
// Загрузка файлов на сервер

// В React <input type="file"> всегда неуправляемый компонент: его значение нельзя установить средствами JS, это может сделать только пользователь.

import { useRef, SyntheticEvent } from 'react';

export function InputFile() {
  const fileInput = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    alert(`Отправляем файл - ${fileInput.current.files[0].name}`);

    if (fileInput.current) {
      fileInput.current.value = '';
    }

    // сбрасываем всю форму до значений по умолчанию
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Отправка файла</h1>
      <label>
        Выберите файл:
        <input type='file' ref={fileInput} />
      </label>
      <button type='submit'>Сохранить</button>
    </form>
  );
}
