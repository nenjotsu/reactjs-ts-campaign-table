import { lazy } from 'react';

const Home = lazy(() => import('views/Home'));

const PrivateRoutes = (isLoggedIn: boolean) => {
  let privateRoutes: any[] = [];

  if (isLoggedIn) {
    privateRoutes = [
      {
        component: Home,
        exact: true,
        id: 'home-id',
        path: '/',
      },
    ];
  }

  return privateRoutes;
};

export default PrivateRoutes;
