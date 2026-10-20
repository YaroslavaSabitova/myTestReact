// onFocus — перемещение фокуса на элемент;
// onBlur — пропадание фокуса с элемента.

// Аналогичны событиям focusin и focusout в js

import { ReactElement, SyntheticEvent } from 'react';

export function FocusBlur(): ReactElement {
  const handleFocus = (e: SyntheticEvent) => {
    console.log('Инпут в фокусе');
  };

  const handleBlur = (e: SyntheticEvent) => {
    console.log('Инпут потерял фокус');
  };

  return (
    <div>
      <h3>onFocus — перемещение фокуса на элемент</h3>
      <h3>onBlur — пропадание фокуса с элемента</h3>
      <input
        type='text'
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Введите что-нибудь'
      />
    </div>
  );
}
