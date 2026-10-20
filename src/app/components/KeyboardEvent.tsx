import { ReactElement } from 'react';

export function KeyboardEvent(): ReactElement {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(e);
    console.log(e.key);
  };

  return (
    <div>
      <h3>события клавиатуры в консоли</h3>
      <input type='text' onKeyUp={handleKeyUp} placeholder='Введите что-нибудь' />
    </div>
  );
}
