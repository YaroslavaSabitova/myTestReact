import { Layout } from '../components/Layout';
import { HOTELS } from '../constants';

export const HotelList = () => {
  return (
    <Layout>
      <h1>Отели:</h1>
      <div className='list'>
        {HOTELS.map(({ img, title }) => (
          <div>
            <figure>
              <img width={200} src={img} alt='blablabla' />
              <figcaption>{title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </Layout>
  );
};
