import Recipe from './components/Recipe';
import Welcome from './components/Welcome';

import type { ReactElement } from 'react';

export const App = (): ReactElement => {
  return (
    <>
      {'компоненты принимают пропсы'}

      <Recipe name='Сырные палочки' />
      <Welcome userName='Мир,' welcomeText='привет' />
    </>
  );
};
