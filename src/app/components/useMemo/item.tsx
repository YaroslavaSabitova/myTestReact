import { TItem } from '../../types';

import './styles.css';

type TItemProps = {
  item: TItem;
};

export const Item = ({ item }: TItemProps) => {
  return <div className='item' />;
};
