import { Routes, Route, useLocation } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { Modal } from '../components/Modal';
import { Home } from '../pages/Home';
import { Hotel } from '../pages/Hotel';
import { HotelList } from '../pages/HotelList';

export const ModalRoutes = () => {
  const location = useLocation();

  // Достаем переданный фон из state (если он есть)
  const state = location.state as { backgroundLocation?: Location };
  const background = state?.backgroundLocation;

  return (
    <div>
      <h3>Модальное окно по нажатию на картинку</h3>
      {/* 
              Первый Routes: 
              Если есть background (кликнули по ссылке), рисуем список отелей.
              Если нет (прямой заход), рисуем отель в обычном Layout.
            */}
      <Routes location={background || location}>
        <Route path='/' element={<Home />} />
        <Route path='/hotel-list' element={<HotelList />} />
        <Route
          path='/hotel/:hotelIndex'
          element={
            <Layout>
              <Hotel />
            </Layout>
          }
        />
      </Routes>

      {/* 
              Второй Routes (Модалка): 
              Рисуется только если есть background. 
              Он "ловит" текущий URL (/hotel/:hotelIndex) и оборачивает Hotel в Modal.
            */}
      {background && (
        <Routes>
          <Route
            path='/hotel/:hotelIndex'
            element={
              <Modal>
                <Hotel />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};
