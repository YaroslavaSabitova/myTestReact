import { ReactElement } from 'react';

type CardProps = {
  title: ReactElement;
  body: ReactElement;
};

export function Card({ title, body }: CardProps): ReactElement {
  return (
    <div className='card'>
      {title}
      {body}
      <button type='button'>В корзину</button>
    </div>
  );
}

export function CardTitle(): ReactElement {
  return <h5 className='card-title'>Звезда Сириус</h5>;
}

export function CardBody(): ReactElement {
  return (
    <div className='card-body'>
      <p>
        Звезда созвездия Большого Пса. Звезда главной последовательности, спектрального
        класса A1. Ярчайшая звезда ночного неба; её светимость в 25 раз превышает
        светимость Солнца, при этом не является рекордной в мире звёзд — высокий видимый
        блеск Сириуса обусловлен его относительной близостью к Земле.
      </p>
      <div className='price'>Цена: oоооочень много</div>
    </div>
  );
}
