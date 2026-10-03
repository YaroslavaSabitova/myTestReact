import type { MouseEvent, ReactElement } from 'react';

type TitleProps = {
  title: string;
};

export function Title(props: TitleProps): ReactElement {
  const handleMouseEnter = (e: MouseEvent<HTMLHeadingElement>): void => {
    // будут выведены координаты курсора, где сработало событие
    console.log(e.clientX, e.clientY);
  };

  return <h1 onMouseEnter={handleMouseEnter}>{props.title}</h1>;
}
