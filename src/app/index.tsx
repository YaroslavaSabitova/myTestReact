import { Book, books, BookProps } from './components/Books';
import { List, listTextbooks } from './components/Books-2';
import { Card, CardTitle, CardBody } from './components/Card';
import { ControlledInput } from './components/controlledInput';
import { InputFile } from './components/inputFile';
import { Title } from './components/MouseEnter';
import { OnlyDigits } from './components/onlyDigits';
import Recipe from './components/Recipe';
import { Select } from './components/select';
import { UncontrolledInput } from './components/uncontrolledInput';
import { Time } from './components/useEffect-onlineTime';
import { TextInput } from './components/useRef-autofocus';
import { ChangeColorRef } from './components/useRef-changeColor';
import { BtnCounter } from './components/useState-counter';
import { ThemeToggle } from './components/useState-theme';
import { ChangeColorState } from './components/useState-vs-useRef-changeColor';
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

      <Title title='Наведи на меня курсор' />

      <ThemeToggle />

      <BtnCounter />

      <Time />

      <TextInput />

      <ChangeColorRef />

      <ChangeColorState />

      <ControlledInput />

      <OnlyDigits />

      <UncontrolledInput />

      <InputFile />

      <Select />
    </>
  );
};
