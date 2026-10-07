// позволяет компоненту взаимодействовать с DOM-элементами или запоминать данные, изменение которых ему не требуется отслеживать

// возвращает объект с одним свойством .current
// current живёт между рендерами — как и состояние из useState, и
// не вызывает перерисовку при изменении — в этом главное отличие от useState.

// useRef — точечный инструмент для двух задач: ссылки на DOM и хранения «служебных» значений между рендерами.
// Читать размеры элемента(offsetHeight)
// Фокус, скролл, вызов методов DOM(video.play())
// Менять стиль через внешнюю библиотеку (например, GSAP)
// Если нужен доступ к DOM без участия React в обновлениях — это useRef

import { useRef } from 'react';

export const ChangeColorRef = () => {
  // <HTMLInputElement | null> — тип: либо HTMLInputElement (когда элемент уже отрисован), либо null (до первого рендера).
  // null — начальное значение. DOM-узла ещё нет, потому что рендер ещё не произошёл.
  // useRef(null) создаёт объект { current: null }.
  const titleRef = useRef<HTMLElement | null>(null);

  const handleChangeColor = (): void => {
    if (titleRef.current) {
      titleRef.current.style.color = 'gold';
    }
  };

  const resetChangeColor = (): void => {
    if (titleRef.current) {
      titleRef.current.style.color = '';
    }
  };

  //  С useRef невозможно сделать динамический текст кнопки, потому что useRef не вызывает перерисовку
  const toggleColor = (): void => {
    if (!titleRef.current) return;

    const currentColor = titleRef.current.style.color;
    titleRef.current.style.color = currentColor === 'gold' ? '' : 'gold';
  };

  return (
    <div className='page'>
      {/* ref привязан к заголовку */}
      {/* React рендерит <h1 ref={titleRef}>. */}
      {/* После рендера React записывает DOM-элемент <h1> в titleRef.current. */}
      <h1 className='header' ref={titleRef}>
        Я меняю свой цвет через useRef
      </h1>
      <div className='card'>
        <button type='button' onClick={handleChangeColor}>
          Изменить цвет
        </button>
        <button type='button' onClick={resetChangeColor}>
          Убрать цвет
        </button>
        <button type='button' onClick={toggleColor}>
          Переключить цвет
        </button>
      </div>
    </div>
  );
};
