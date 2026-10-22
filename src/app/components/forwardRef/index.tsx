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
