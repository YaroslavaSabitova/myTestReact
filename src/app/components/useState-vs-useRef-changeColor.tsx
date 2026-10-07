// Хук useState позволяет добавить в функциональный компонент состояние, которое будет сохраняться при его перерендерах. При изменении этого состояния компонент будет перерисовываться. Наличие такого состояния позволяет реализовывать динамические компоненты, содержимое которых будет изменяться, например, при взаимодействии с ним пользователя.

// useState сохраняет значение между рендерами и, когда меняешь значение,  React перерисовывает компонент
// Позволяет менять стиль в ответ на состояние (клик, ввод)
// если значение должно влиять на разметку — это useState

import { useState } from 'react';

export const ChangeColorState = () => {
  // Начальное состояние компонента и функция для изменения состояния
  // [текущееЗначение, функцияЧтобыЕгоИзменить] = вызов хука с начальным значением
  // isGold = false
  const [isGold, setIsGold] = useState(false);

  const handleChangeColor = (): void => {
    // isGold = true;
    setIsGold(true);
  };

  const resetChangeColor = (): void => {
    // isGold = false
    setIsGold(false);
  };

  // prev - текущее значение
  const toggleColor = (): void => {
    setIsGold((prev) => !prev);
  };

  return (
    <div className='page'>
      <h1 className='header' style={{ color: isGold ? 'gold' : undefined }}>
        Я меняю свой цвет через useState
      </h1>
      <div className='card'>
        <button type='button' onClick={handleChangeColor}>
          Изменить цвет2
        </button>
        <button type='button' onClick={resetChangeColor}>
          Убрать цвет2
        </button>
        <button type='button' onClick={toggleColor}>
          {isGold ? 'Убрать цвет' : 'Изменить цвет'}
        </button>
      </div>
    </div>
  );
};
