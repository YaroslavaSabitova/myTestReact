// запоминаем логин пользователя

import React, { useState } from 'react';

import './styles.css';

export const LogIn = () => {
  // localStorage — встроенное в браузер хранилище
  // getItem('login') читает значение по ключу login

  // Если пользователь раньше заходил, там будет его логин (например, "admin"). Он подставится в стейт.

  // Если это первый заход, getItem вернёт null.Сработает || '', и в стейт попадёт пустая строка.

  // password в целях безопасности всегда пустая строка ''

  const [login, setLogin] = useState(localStorage.getItem('login') || '');
  const [password, setPassword] = useState('');

  // срабатывают при каждом нажатии клавиши
  const onChangeLogin: React.ReactEventHandler<HTMLInputElement> = (e) => {
    // setLogin( ) —  кладём напечатанный текст в useState
    setLogin(e.currentTarget.value);
  };
  const onChangePassword: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit: React.ReactEventHandler<HTMLFormElement> = (e) => {
    // отмена перезагрузки страницы, иначе всё состояние сбросится
    e.preventDefault();

    // записываем логин в localStorage браузера
    localStorage.setItem('login', login);
  };

  return (
    <main className='container small'>
      <h3>запоминаем логин пользователя</h3>
      <form onSubmit={onSubmit} className='column'>
        <label>
          <span>Логин</span>
          <input type='text' onChange={onChangeLogin} value={login} />
        </label>
        <label>
          <span>Пароль</span>
          <input type='password' onChange={onChangePassword} value={password} />
        </label>
        <button>Отправить</button>
      </form>
    </main>
  );
};

// value={login} + onChange = Контролируемый компонент (Controlled Component), т.е. поле ввода не хранит текст само по себе, а всегда показывает то, что лежит в переменной login
