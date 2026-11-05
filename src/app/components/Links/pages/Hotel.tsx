import { useParams, Navigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { HOTELS } from '../constants';

export const Hotel = () => {
  // достаем параметр из URL с помощью useParams
  const { hotelIndex } = useParams<{ hotelIndex: string }>();
  const index = parseInt(hotelIndex!);

  //  Если индекс не число или больше длины массива отелей
  if (isNaN(index) || index > HOTELS.length - 1) {
    // едирект на страницу со списком
    return <Navigate to='/hotel-list' />;
  }

  const hotel = HOTELS[index];

  return (
    <Layout>
      <h1>{hotel.title}</h1>
      <figure>
        <img width={200} src={hotel.img} alt='blablabla' />
        <figcaption>{hotel.description}</figcaption>
      </figure>
    </Layout>
  );
};
