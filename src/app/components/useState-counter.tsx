// Хук useState позволяет добавить в функциональный компонент состояние, которое будет сохраняться при его перерендерах. При изменении этого состояния компонент будет перерисовываться. Наличие такого состояния позволяет реализовывать динамические компоненты, содержимое которых будет изменяться, например, при взаимодействии с ним пользователя.

// useState сохраняет значение между рендерами и, когда меняешь значение,  React перерисовывает компонент

import { useState, ReactElement } from 'react';

export function BtnCounter(): ReactElement {
  // Начальное состояние компонента и функция для изменения состояния
  // [текущееЗначение, функцияЧтобыЕгоИзменить] = вызов хука с начальным значением
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState<number>(0);

  // Обработчик клика на кнопку
  const handleClick = () => {
    // Вызов функции для изменения счётчика
    setCount(count + 1);
  };

  return (
    <div className='page'>
      <div className='card'>
        <button className='button' type='button' onClick={handleClick}>
          Счётчик {count}
        </button>
      </div>
    </div>
  );
}
