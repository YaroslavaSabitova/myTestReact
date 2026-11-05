import { Link } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { HOTELS } from '../constants';

export const HotelList = () => {
  return (
    <Layout>
      <h1>Отели:</h1>
      <div className='list'>
        {HOTELS.map(({ img, title }, index) => (
          <Link to={`/hotel/${index}`} key={index}>
            <figure>
              <img width={200} src={img} alt='blablabla' />
              <figcaption>{title}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
