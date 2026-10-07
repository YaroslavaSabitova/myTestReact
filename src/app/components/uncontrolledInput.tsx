// неуправляемое поле
// React не хранит текст в состоянии
// Текст живёт в DOM-элементе, а мы обращаемся к нему через ref, когда он нам нужен.
// Значение в DOM. React не знает, что в поле, пока ты сам не прочитаешь через input.current.value
// значение хранит браузер, а React просто даёт доступ к DOM

// Пользователь печатает, React не знает об этом — никакой перерисовки.

import { useRef, SyntheticEvent } from 'react';
// SyntheticEvent — это обёртка React над нативным событием браузера. React делает такую обёртку, чтобы события работали одинаково во всех браузерах. У него те же методы, что у нативного (preventDefault, stopPropagation, target, currentTarget и т.д.)

export function UncontrolledInput() {
  // <HTMLTextAreaElement | null> — тип: либо HTMLTextAreaElement (когда элемент уже отрисован), либо null (до первого рендера).
  // null — начальное значение. DOM-узла ещё нет, потому что рендер ещё не произошёл.
  // useRef(null) создаёт объект { current: null }.
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    alert('Заголовок поста в блоге: ' + textareaRef.current.value);
    textareaRef.current.value = '';
  }

  return (
    // Обработчик вешается на форму, а не на кнопку. Это правильный способ — форма сама знает, когда её отправили
    <form onSubmit={handleSubmit}>
      <h1>Заголовок поста</h1>

      <label>
        Напишите что-нибудь
        {/* React после рендера положит DOM-элемент в textareaRef.current. Через него можно читать .value */}
        <textarea ref={textareaRef} />
      </label>
      <button type='submit'>Отправить</button>
    </form>
  );
}
