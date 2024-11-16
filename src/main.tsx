import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/index.css';
import { Provider } from '@providers/Provider.tsx';
import { Home } from '@home/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Home />
    </Provider>
  </StrictMode>,
);
