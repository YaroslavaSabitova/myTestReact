import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import { store } from './app/components/ToDoList-Redux/todoStore';
// import { store } from './app/components/Async/store/store';
import { store } from './app/commonStore';
import { App } from './app/index';

import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// BrowserRouter —  перехватывает изменения URL в браузере (через History API) и не даёт странице перезагружаться. Оборачивает всё приложение.
