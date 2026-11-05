import { useParams, Navigate } from 'react-router-dom';

import { HOTELS } from '../constants';

export const Hotel = () => {
  const { hotelIndex } = useParams<{ hotelIndex: string }>();
  const index = parseInt(hotelIndex!);

  if (isNaN(index) || index > HOTELS.length - 1) {
    return <Navigate to='/hotel-list' />;
  }

  const hotel = HOTELS[index];

  return (
    <>
      <h1>{hotel.title}</h1>
      <figure>
        <img width={200} src={hotel.img} alt='Elephant at sunset' />
        <figcaption>{hotel.description}</figcaption>
      </figure>
    </>
  );
};
