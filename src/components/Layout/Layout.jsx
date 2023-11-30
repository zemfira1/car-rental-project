import { Header } from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MainArea } from './Layout.styled';
import { Loader } from 'components/Loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <MainArea>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainArea>
    </>
  );
};
