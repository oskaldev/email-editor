import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AuthProvider } from './AuthContext.provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error(`Root element not found`);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <div>404</div>,
    },
    {
      path: '/about-us',
      element: <div>About us</div>,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </AuthProvider>
  </StrictMode>,
);
