// Link — "Кнопка переключения", заменяет обычные ссылки <a>, чтобы менять URL без перезагрузки страницы.

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <ul className='list'>
        <li>
          <Link to='/'>Главная страница</Link>
        </li>
        <li>
          <Link to='/hotel-list'>Список отелей</Link>
        </li>
      </ul>
    </header>
  );
};
