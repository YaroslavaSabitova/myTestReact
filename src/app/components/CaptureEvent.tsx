// в React возможно регистрировать события не на фазе всплытия, а на фазе захвата. Для этого нужно просто на целевом элементе к названию нужного события добавить слово Capture

import { ReactElement } from 'react';

export function CaptureEvent(): ReactElement {
  function captureClick() {
    console.log('отловленный через onClickCapture клик на родителе');
  }

  function bubbleClick() {
    console.log('всплывающий клик на родителе');
  }

  function targetClick() {
    console.log('Клик на конопке');
  }

  /* Добавим обработчик onClickCapture */

  return (
    <div>
      <h3>
        Без onClickCapture клик срабатывает сначала на кнопке, потом на её родителе
      </h3>
      <h3>
        Вместе c onClickCapture клик срабатывает сначала на родителе, потом на кнопке
        внутри
      </h3>
      <div onClick={bubbleClick} onClickCapture={captureClick}>
        <button onClick={targetClick}>Нажми на кнопку</button>
      </div>
    </div>
  );
}
