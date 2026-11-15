import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import RapidButton from './button';
import Items from './items';
import { updateWidth } from './utils';

import './styles.css';

export const Memo = () => {
  const [name, setName] = useState('');
  const [itemWidth, setItemWidth] = useState(1);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleItemWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemWidth(Number(e.target.value));
    updateWidth();
  };

  // оборачиваем функцию в useCallback.
  // Теперь она не будет меняться при вводе name, а только при смене itemWidth.
  const handleRapidChange = useCallback(() => {
    if (itemWidth <= 3) {
      setItemWidth(4.5);
    } else {
      setItemWidth(1);
    }
    updateWidth();
  }, [itemWidth]);

  // оборачиваем массив в useMemo.
  // Он пересоздастся только тогда, когда изменится itemWidth.
  const items = useMemo(
    () => [
      { flex: itemWidth, background: `#213547` },
      { flex: 1, background: 'peru' },
      { flex: 3, background: 'tomato' },
    ],
    [itemWidth]
  );

  return (
    <div className='page'>
      <Items items={items} />
      <section className='card'>
        <label htmlFor='name'>Название</label>
        <input
          className='input'
          id='name'
          type='text'
          value={name ?? ''}
          onChange={handleNameChange}
        />
        <label htmlFor='first-item-width'>Ширина первого элемента:</label>
        <input
          id='first-item-width'
          type='range'
          min={1}
          max={5}
          step={0.01}
          value={itemWidth}
          onChange={handleItemWidthChange}
        />
        <RapidButton onClick={handleRapidChange} />
      </section>
    </div>
  );
};
