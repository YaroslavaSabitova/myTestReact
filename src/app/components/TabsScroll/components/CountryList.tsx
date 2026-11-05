import { COUNTRIES } from '../constants';
import { Item } from './Item';

export const CountryList = () => {
  return (
    <div className='list'>
      {COUNTRIES.map(({ img, title }, index) => (
        <Item key={index} img={img} title={title} />
      ))}
    </div>
  );
};
