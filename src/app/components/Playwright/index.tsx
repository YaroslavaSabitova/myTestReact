import { useState } from 'react';

export default function Playwright() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Счётчик для playwright</h3>
      <p data-testid='count'>Счёт: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      <button onClick={() => setCount(0)}>Сбросить</button>
    </div>
  );
}
