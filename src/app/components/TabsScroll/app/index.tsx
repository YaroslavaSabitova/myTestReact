import { Routes, Route } from 'react-router-dom';

import { Tabs } from '../Tabs';

export const TabsScroll = () => {
  return (
    <div>
      <h3>TabsScroll</h3>
      <Routes>
        <Route path='/' element={<Tabs />} />
      </Routes>
    </div>
  );
};
