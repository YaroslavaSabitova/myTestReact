import { Link, useLocation } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { HOTELS } from '../constants';

export const HotelList = () => {
  // Получаем информацию о текущем URL
  const location = useLocation();

  return (
    <Layout>
      <h1>Отели:</h1>
      <div className='list'>
        {HOTELS.map(({ img, title }, index) => (
          <Link
            key={index}
            to={`/hotel/${index}`}
            // Передаем текущую страницу в state, чтобы знать, куда вернуться
            state={{ backgroundLocation: location }}
          >
            <figure>
              <img width={200} src={img} alt='Elephant at sunset' />
              <figcaption>{title}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
