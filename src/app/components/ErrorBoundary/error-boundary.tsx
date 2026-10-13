import React, { ReactNode } from 'react';

import { TErrorMessageProps } from './types';

// Error Boundaries пишутся ТОЛЬКО классами. В React пока нет аналога в хуках. Это единственное место, где классовые компоненты всё ещё обязательны.

// Error Boundary работает через специальные методы жизненного цикла:

// static getDerivedStateFromError(error) — ловит ошибку, обновляет состояние;
// componentDidCatch(error, info) — логирует ошибку.

// Этих методов нет в функциональных компонентах, и хуков-аналогов тоже

type TErrorBoundaryProps = {
  errorComponent: React.ComponentType<TErrorMessageProps>;
  children: ReactNode;
};

export class ErrorBoundary extends React.Component<
  TErrorBoundaryProps,
  { error: Error | null }
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return error;
  }

  render() {
    if (this.state.error) {
      <this.props.errorComponent error={this.state.error} />;
    }
    return this.props.children;
  }
}
