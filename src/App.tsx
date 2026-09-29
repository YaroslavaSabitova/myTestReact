import Recipe from './app/components/Recipe';

export const App = (): object => {
  return (
    // компонент Recipe принимает пропс с названием блюда
    <Recipe name='Сырные палочки' />
  );
};
