import { ReactElement, SyntheticEvent } from 'react';

export function SynthEvent(): ReactElement {
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();

    // останавливаем всплытие
    e.stopPropagation();

    console.log('клик по кнопке');
  };

  const handleClickDiv = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log('клик по диву');
  };

  return (
    <div onClick={handleClickDiv}>
      <button onClick={handleClick}>Маленькая кнопка</button>
    </div>
  );
}
