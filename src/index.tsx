import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import TodoContextProvider from './context/todoContext';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <TodoContextProvider>
    <App  />
    </TodoContextProvider>
  </StrictMode>
);
