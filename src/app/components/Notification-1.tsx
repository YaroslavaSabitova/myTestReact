import { ReactElement } from 'react';

// компонент специализированный и принимает конкретные данные
type NotificationProps = {
  // можно передать только строку
  notificationText: string;
};

export const Notification = (props: NotificationProps): ReactElement => (
  <div className='notification'>
    <p>{props.notificationText}</p>
  </div>
);

<Notification notificationText='Внимание! Обнаружено повышение радиации в 4-м блоке' />;
