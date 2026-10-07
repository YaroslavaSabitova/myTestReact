// Пользователь выбирает роль — она сразу сохраняется в состоянии role. <select> — контролируемый: его отображаемое значение всегда берётся из role, а не из DOM.

import { useState, ChangeEvent } from 'react';

export const Select = () => {
  type Role = 'designer' | 'developer' | 'teamlead' | 'project-manager';
  const [role, setRole] = useState<Role>('designer');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };

  return (
    <label>
      Ваша роль в проекте:
      <select value={role} onChange={handleChange}>
        <option value='designer'>Дизайнер</option>
        <option value='developer'>Разработчик</option>
        <option value='teamlead'>Тимлид</option>
        <option value='project-manager'>Руководитель проекта</option>
      </select>
    </label>
  );
};
