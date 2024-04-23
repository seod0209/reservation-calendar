import { FC, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes as DomRoutes } from 'react-router-dom';

import MainPage from '@Pages/main';

const renderLoader = (): null => null;

const Routes: FC = () => (
  <BrowserRouter>
    <Suspense fallback={renderLoader()}>
      <DomRoutes>
        <Route path="/" element={<MainPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </DomRoutes>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
