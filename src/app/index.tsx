import { Book, books, BookProps } from './components/Books';
import { List, listTextbooks } from './components/Books-2';
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
      <Card
        title={title}
        body={body}
        action={
          <button type='button' className='button'>
            В корзину
          </button>
        }
      />
      <Card
        title={title}
        body={body}
        action={
          <a href='' target='_blank' className='link'>
            Ссылка куда-то
          </a>
        }
      />

      {books.map((book: BookProps) => (
        <Book key={book.article} title={book.title} description={book.description} />
      ))}

      <List list={listTextbooks} />
    </>
  );
};
