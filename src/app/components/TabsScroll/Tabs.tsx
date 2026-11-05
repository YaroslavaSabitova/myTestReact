import { useNavigate, useSearchParams } from 'react-router-dom';

import { CountryList } from './components/CountryList';
import { HotelList } from './components/HotelList';
import { Title } from './components/Title';

export const Tabs = () => {
  // Достаем текущие параметры, чтобы знать, какой таб активен
  const [searchParams] = useSearchParams();
  // const currentTab = searchParams.get('currentTab') || 'hotels';

  // Используем useNavigate для изменения URL
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    // Переходим по новому URL с нужным search-параметром
    navigate({ search: `?currentTab=${tab}` });
  };

  return (
    <div className='container small'>
      <div className='tabs'>
        <button className='tab' onClick={() => handleTabClick('hotels')}>
          Отели
        </button>
        <button className='tab' onClick={() => handleTabClick('countries')}>
          Страны
        </button>
      </div>
      <div>
        <Title tabName='hotels'>Отели:</Title>
        <HotelList />
        <Title tabName='countries'>Страны:</Title>
        <CountryList />
      </div>
    </div>
  );
};
