// В SPA (Single Page Application) на React страница загружается один раз.

// Маршрутизация — это механизм, который следит за адресной строкой браузера (URL) и решает, какой компонент показать на экране прямо сейчас, без перезагрузки страницы.

// Routes — "Переключатель", смотрит на текущий URL и ищет среди своих детей подходящий <Route>, контейнер, внутри которого лежат правила.

// Route - "Правило": если у URL такой-то (path), покажи вот этот element

import { Routes, Route } from 'react-router-dom';

import { Auth } from '../Auth';
import { Home } from '../pages/Home';
import { HotelList } from '../pages/HotelList';
import { SignIn } from '../pages/SignIn';

export const Links = () => {
  return (
    <div>
      <h3>Маршрутизация в SPA (Single Page Application)</h3>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel-list' element={<HotelList />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
};
