import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { AppDispatch } from '../../../commonStore';
import { getUserThunk, init } from '../components/userSlice';
import { AdminPage } from '../pages/AdminPage';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

export const SavePassword = () => {
  const dispatch: AppDispatch = useDispatch();

  // Добавляем проверку при монтировании приложения
  useEffect(() => {
    // 1. Достаем токен из памяти браузера
    const token = localStorage.getItem('token');

    if (token) {
      // 2. Если токен есть — запрашиваем данные пользователя
      dispatch(getUserThunk({ token }));
    } else {
      // 3. Если токена нет — сообщаем приложению, что мы его проверили, и пользователя нет
      dispatch(init());
    }
  }, [dispatch]); // Пустой массив зависимостей (или dispatch) — эффект сработает 1 раз при загрузке

  return (
    <div>
      <h3>авторизация с сохранением сессии</h3>
      <h3>
        при следующем открытии сайта автоматическая авторизация без повторного ввода
        пароля
      </h3>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </div>
  );
};

// При входе: Пользователь вводит логин и пароль, получает токен. Мы кладем его в localStorage.

// При перезагрузке страницы (F5): Компонент App рендерится заново. Срабатывает useEffect.

// Проверка: localStorage.getItem('token') смотрит в localStorage.

// Если токен есть: Мы вызываем dispatch(getUserThunk({ token })). Сервер (имитация через setTimeout) проверяет токен и возвращает данные пользователя. В Redux попадает user.

// Если токена нет: Вызываем dispatch(init()) - переключает флаг isInit в true, а когда true — пускаем на страницу (или редиректим на логин).
