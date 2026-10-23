import { useState } from 'react';

import { LikeButton } from './LikeButton';
import { ShareButton } from './ShareButton';
import { withAuthButton } from './withAuth';

import './styles.css';

// Создаем обернутые компоненты
const WithAuthShareButton = withAuthButton(ShareButton);
const WithAuthLikeButton = withAuthButton(LikeButton);

export const HOC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const toggleLogin = () => {
    setIsAuth(!isAuth);
  };

  return (
    <div>
      <h3>HOC - Higher-Order Components</h3>
      <h4>выносим общую логику в отдельный код</h4>
      <ul>
        <li>
          когда несколько компонентов в приложении нуждаются в одной и той же
          функциональности, такой как аутентификация пользователя.
        </li>
        <li>
          когда нужно повторно использовать логику для доступа к данным из хранилища
        </li>
        <li>
          когда у разных компонентов идёт одинаковая обработка состояний (загрузка
          данных, обработка ошибок и т.д.)
        </li>
      </ul>
      <button className='auth-button' onClick={toggleLogin}>
        {isAuth ? 'Выйти' : 'Войти'}
      </button>
      <div className='card-container'>
        <div className='card'>Здесь должна быть умная мысль</div>
        <div className='like-share-container'>
          {/* Используем новые компоненты */}
          <WithAuthShareButton isAuth={isAuth} needAuthText='Необходима авторизация' />
          <WithAuthLikeButton isAuth={isAuth} needAuthText='Необходима авторизация' />
        </div>
      </div>
    </div>
  );
};
