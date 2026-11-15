import React, { ComponentType, ReactElement } from 'react';

import { getWidthUpdates } from './utils';

export const withControlRerenders = <P extends {}>(
  name: string,
  WrappedComponent: ComponentType<P>
): ComponentType<P> => {
  let rerendersNo = 0;

  const Component = (props: P): ReactElement => {
    rerendersNo++;

    if (rerendersNo - getWidthUpdates() > 1) {
      console.error('Too many rerenders of', name);
    }

    return <WrappedComponent {...props} />;
  };

  // Возвращаем компонент, обернутый в React.memo
  return React.memo(Component);
};
