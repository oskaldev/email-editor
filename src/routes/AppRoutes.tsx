import Home from '@home/Home';
import Email from '@pages/email/Email';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/email-editor' element={<Email />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
