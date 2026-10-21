// в React возможно регистрировать события не на фазе всплытия, а на фазе захвата. Для этого нужно просто на целевом элементе к названию нужного события добавить слово Capture

import { ReactElement } from 'react';

export function CaptureEvent(): ReactElement {
  function captureClick() {
    console.log('отловленный через onClickCapture клик на родителе');
  }

  function bubbleClick() {
    console.log('всплывающий клик на родителе');
  }

  function targetClick(e: React.MouseEvent) {
    // отмена всплытия
    // убирает bubbleClick - всплывающий клик на родителе
    e.stopPropagation();

    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
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
        <div onClick={targetClick}>
          <button>
            <span>Нажми на кнопку</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// e.target - где кликнули(button или span)
// e.currentTarget - всегда тот, на ком обработчик, т.е div
