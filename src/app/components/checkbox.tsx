import { useState } from 'react';

import type { ChangeEvent } from 'react';

export const Checkbox = () => {
  const [checked, setChecked] = useState(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Тут у event.target используем свойство checked
    setChecked(e.target.checked);
  };

  return (
    <>
      <h3>checkbox</h3>
      <label>
        Запомнить меня и больше не разлогинивать
        <input name='rememberMe' type='checkbox' checked={checked} onChange={onChange} />
      </label>
    </>
  );
};
