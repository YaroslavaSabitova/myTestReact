import { ReactElement } from 'react';

export type BookProps = {
  article?: number;
  title: string;
  description?: string;
};

export function Book(props: BookProps): ReactElement {
  return (
    <>
      <h2>{props.title}</h2>
      {props.description && <p>{props.description}</p>}
    </>
  );
}
export const books = [
  {
    article: 1,
    title: 'Русские народные сказки',
  },
  {
    article: 2,
    title: 'Энциклопедия о животных',
    description: 'Много интересных фактов о животных',
  },
];
