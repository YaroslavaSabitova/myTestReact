// Error Boundary — это компонент, который ловит ошибки в своих дочерних компонентах и показывает запасной UI вместо упавшего дерева.

import { useState } from 'react';

import { fakeUsers } from './data';
import { ErrorBoundary } from './error-boundary';
import { TErrorMessageProps, TUser } from './types';

const ErrorMessage = ({ error }: TErrorMessageProps) => {
  return (
    <div className='error'>
      <p className='warning'>Что-то пошло не так!</p>
      <p>
        <span>Ошибка:</span> {error.message}
      </p>
    </div>
  );
};

export const ErrorBoundaryApp = () => {
  const [users] = useState<TUser[]>(fakeUsers);

  return (
    <div>
      <h2>Список пользователей:</h2>

      <ErrorBoundary errorComponent={ErrorMessage}>
        <ul className='users'>
          {users.map((user) => (
            <div className='user' key={user.id}>
              <p>
                <span>Имя:</span> {user.name}
              </p>
              <p>
                <span>Email:</span> {user.email}
              </p>
            </div>
          ))}
        </ul>
      </ErrorBoundary>
    </div>
  );
};
