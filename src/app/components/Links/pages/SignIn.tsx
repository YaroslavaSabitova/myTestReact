import React, { useState } from 'react';

export const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setLogin(e.currentTarget.value);
  };
  const onChangePassword: React.ReactEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit: React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // Тут внешний редирект
  };

  return (
    <main className='container small'>
      <h1>Вход:</h1>
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
