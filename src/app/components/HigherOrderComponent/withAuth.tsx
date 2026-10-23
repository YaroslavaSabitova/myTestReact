// создаём функцию, которая принимает какой-то компонент (WrappedComponent) и возвращает новый компонент-обёртку

import React from 'react';

// Пропсы, которые HOC будет добавлять к оборачиваемому компоненту
export interface WithAuthProps {
  isAuth: boolean;
  needAuthText: string;
}

// Функция HOC. <P extends object> — это дженерик,
// который позволяет HOC принимать любые пропсы оборачиваемого компонента.
export function withAuthButton<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  // Возвращаем новый функциональный компонент
  return function WithAuth(props: P & WithAuthProps) {
    // Достаем isAuth и needAuthText, остальные пропсы собираем в ...rest
    const { isAuth, needAuthText, ...restProps } = props;

    // Если не авторизован — показываем текст
    if (!isAuth) {
      return <div>{needAuthText}</div>;
    }

    // Если авторизован — рендерим оригинальный компонент,
    // передавая ему его "родные" пропсы
    return <WrappedComponent {...(restProps as P)} />;
  };
}
