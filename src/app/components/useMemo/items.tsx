import { Item } from './item';
import { TItemList } from './types';
import { withControlRerenders } from './withControlRenders';

import './styles.css';

type TItemsProps = {
  items: TItemList;
};

const Items = ({ items }: TItemsProps) => {
  return (
    <div className='items'>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default withControlRerenders('Items', Items);
