import { Card, CardTitle, CardBody } from './components/Card';
import Recipe from './components/Recipe';
import Welcome from './components/Welcome';

import type { ReactElement } from 'react';

const title = <CardTitle />;
const body = <CardBody />;

export const App = (): ReactElement => {
  return (
    <>
      <Recipe name='Сырные палочки' />
      <Welcome userName='Мир,' welcomeText='привет' />
      <Card title={title} body={body} />
    </>
  );
};
