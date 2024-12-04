import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@styles/index.css';
import App from './App';
import { Provider } from '@providers/Provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
