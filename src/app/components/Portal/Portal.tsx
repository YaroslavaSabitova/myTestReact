// Portal (портал)  позволяет отрендерить React-компонент в любое место DOM-дерева, даже если в React-дереве он находится далеко. При этом логика React (состояние, пропсы, обработчики, всплытие событий) сохраняется.
// В React за это отвечает функция createPortal из пакета react-dom.

import { DetailsButton } from './DetailsButton';

export const Portal = () => {
  return (
    <div>
      <h3>
        Portal (портал) позволяет отрендерить React-компонент в любое место DOM-дерева,
        даже если в React-дереве он находится далеко
      </h3>
      <div className='element-container'>
        <div className='element-name'>
          <div>React</div>
          <div className='element-details-container' id='react-id'>
            {/* СЮДА createPortal вставит модалку */}
          </div>
        </div>
        <DetailsButton text='React – библиотека для&#160;создания фронтенд-приложений' />

        <h3>Portal нужен, когда</h3>
        <ul>
          <li>
            <b>Модальные окна.</b> Чтобы окно перекрывало весь сайт (position: fixed;
            z-index: 9999), не завися от overflow: hidden или z-index родительских
            контейнеров
          </li>
          <li>
            <b>Тултипы и выпадающие списки.</b> Чтобы они не обрезались границами
            родительского блока ( если у родителя overflow: hidden)
          </li>
          <li>
            <b>Уведомления (Toasts).</b> Чтобы они висели в углу экрана независимо от
            того, где произошло действие.
          </li>
        </ul>
      </div>
    </div>
  );
};
