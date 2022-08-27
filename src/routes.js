import { useRoutes } from 'react-router-dom';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '*',
      element: <NotFound />
    },
  ]);
}
