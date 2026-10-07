// позволяет компоненту взаимодействовать с DOM-элементами или запоминать данные, изменение которых ему не требуется отслеживать

// возвращает объект с одним свойством .current
// current живёт между рендерами — как и состояние из useState, и
// не вызывает перерисовку при изменении — в этом главное отличие от useState.

// useRef — точечный инструмент для двух задач: ссылки на DOM и хранения «служебных» значений между рендерами.
// Читать размеры элемента(offsetHeight)
// Фокус, скролл, вызов методов DOM(video.play())
// Менять стиль через внешнюю библиотеку (например, GSAP)
// Если нужен доступ к DOM без участия React в обновлениях — это useRef

import { useRef, useEffect } from 'react';

//  автофокус - фокус ввода на поле ввода при отображении компонента

export const TextInput = () => {
  // <HTMLInputElement | null> — тип: либо HTMLInputElement (когда элемент уже отрисован), либо null (до первого рендера).
  // null — начальное значение. DOM-узла ещё нет, потому что рендер ещё не произошёл.
  // useRef(null) создаёт объект { current: null }.
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // вызываем метод focus() у DOM-элемента
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h3>autofocus</h3>
      <label htmlFor='name'>Name</label>

      {/* когда <input> появится в DOM, ссылка на него будет в inputRef.current */}
      <input id='name' ref={inputRef} />
    </div>
  );
};
