import { useLayoutEffect, useRef, useState } from 'react';

export const FunctionalBtn = () => {
  // count = 0
  // при вызове setCount() React перерисовывает компонент.

  const [count, setCount] = useState(0);

  // DOM-элемент кнопки
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const updateColor = () => {
    // проверяем, что кнопка уже отрисована
    if (buttonRef.current) {
      buttonRef.current.style.color = count % 2 ? 'chocolate' : 'lightgreen';
    }
  };

  // useLayoutEffect — срабатывает после того, как DOM обновлён, но ДО того, как браузер отрисовал

  // useLayoutEffect, а не useEffect, потому что focus() и смена цвета должны произойти до того, как пользователь увидит страницу, без эффекта моргания
  useLayoutEffect(() => {
    buttonRef.current?.focus();
    updateColor();
  }, []);

  // обновить состояние по клику
  const handleClick = () => {
    setCount(count + 1);
    updateColor();
  };

  return (
    <div className='page'>
      <div className='card'>
        <h2>Функциональный компонент-счётчик с кнопкой</h2>
        <button className='button' ref={buttonRef} onClick={handleClick}>
          Счётчик: {count}
        </button>
      </div>
    </div>
  );
};
