import { useEffect, useRef } from 'react';

import { Input } from './Input';

export const ForwardRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // inputRef.current = DOM-элемент инпута <input>
    inputRef.current?.focus();
    // ставим фокус при отрисовке элемента
  }, []);

  const handleSubscribeClick = () => {
    inputRef.current?.blur();
    // убираем фокус
  };

  return (
    <div>
      <h3>
        ForwardRef - это специальная функция React, которая позволяет компоненту принять
        ref от родителя и передать его вниз, на конкретный DOM-элемент.
      </h3>
      <h3>привязываем реф к HTML-тегу</h3>
      <h4>
        при обновлении страницы фокус автоматически ставится на поле ввода, то есть на
        элементе input;
      </h4>
      <h4>после нажатия на кнопку Подписаться фокус пропадает из элемента input.</h4>
      <Input label='Введите email:' placeHolder='email' ref={inputRef} />
      <button onClick={handleSubscribeClick}>Подписаться</button>
    </div>
  );
};

// Создание: ForwardRef создаёт inputRef и передаёт его в <Input ref={inputRef} />.

// Проброс: Input (благодаря forwardRef) принимает inputRef и вешает на <input ref={inputRef} />.

// Привязка: React отрисовывает <input> и кладёт реальный DOM-элемент в inputRef.current.

// Использование: ForwardRef через inputRef.current может вызвать .focus() или .blur() когда угодно.
