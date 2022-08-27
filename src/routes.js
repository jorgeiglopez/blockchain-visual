import { useRoutes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: 'home',
      element: <MainPage />
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);
}
