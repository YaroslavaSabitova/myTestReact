import { ReactElement } from 'react';

import type { ReactNode } from 'react';

type NotificationProps = {
  // Внутрь можно положить что угодно — строку, число, JSX, массив, другой компонент
  children: ReactNode;
};

export const Notification = (props: NotificationProps): ReactElement => (
  <div className='notification'>
    <p>{props.children}</p>
  </div>
);

<Notification>
  <strong>Внимание!</strong> Обнаружено повышение радиации в
  <a href='/block-4'>4-м блоке</a>
</Notification>;
