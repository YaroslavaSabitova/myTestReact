import { Layout } from '../components/Layout';

export const Home = () => {
  return (
    <Layout>
      <h1>Домашняя страница</h1>
      <section>
        <h3>ФИО</h3>
        <p>
          <b>Возраст: </b> _ лет
        </p>
        <p>
          <b>Рост: </b> _ см
        </p>
        <p>
          <b>Вес: </b> _ кг
        </p>
      </section>
    </Layout>
  );
};
