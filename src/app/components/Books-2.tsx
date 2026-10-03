import { ReactElement } from 'react';

type ItemProps = {
  item: string;
};

function Item(props: ItemProps): ReactElement {
  return <li>{props.item}</li>;
}

type ListProps = {
  list: string[];
};

export function List(props: ListProps): ReactElement {
  return (
    <ul>
      {props.list.map((item, index) => (
        // key — это специальный атрибут React, который помогает ему отличать элементы списка друг от друга.
        <Item key={index} item={item} />
      ))}
    </ul>
  );
}

export const listTextbooks = [
  'Русский язык - Гусарова И.В.',
  'Литература (в 2 частях) - Лебедев Ю.В.',
  'Черчение - Преображенская Н.Г., Кодукова И.В.',
  'Химия - Габриелян О.С., Остроумов И.Г., Сладков С.А.',
  'Информационная безопасность. Кибербезопасность. - Цветкова М.С., Хлобыстова И.Ю.',
];
