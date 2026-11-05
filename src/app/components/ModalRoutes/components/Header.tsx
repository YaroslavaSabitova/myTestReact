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
import '../styles.css';
