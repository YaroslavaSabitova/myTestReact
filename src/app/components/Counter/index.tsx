// Пользовательский интерфейс

import { useCounter } from './useCounter';

import './styles.css';

export const Counter = () => {
  // Достаем данные и функции из хука
  const { counter, increment, decrement, double, divide } = useCounter();

  return (
    <div>
      <h3>
        пример того, как React-компоненты могут &#171;дружить&#187; с&#160;обычными
        классами и&#160;внешними сервисами (например, библиотеками для графиков, карт или
        вот такими сервисами-счетчиками)
      </h3>
      {/* Выводим значение счетчика */}
      <div className='counter'>Значение счетчика: {counter}</div>
      <div>
        <button className='counter-button' onClick={increment}>
          Прибавить 1
        </button>
        <button className='counter-button' onClick={decrement}>
          Вычесть 1
        </button>
        <button className='counter-button' onClick={double}>
          Умножить на 2
        </button>
        <button className='counter-button' onClick={divide}>
          Разделить на 2
        </button>
      </div>
    </div>
  );
};
