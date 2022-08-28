import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/main-page';
import NotFound from './pages/Page404';
import HashFunction from "./pages/HashFunction";
import { TheBlock } from './pages/TheBlock';
import { Blockchain } from './pages/Blockchain';
import { Distributed } from './pages/Distributed';
import { Tokens } from './pages/Tokens';
import { Coinbase } from './pages/Coinbase';


export default function Router() {
  return useRoutes([
    {
      path: '/main',
      element: <MainLayout />,
      children: [
        { path: 'hash', element: <HashFunction /> },
        { path: 'block', element: <TheBlock /> },
        { path: 'blockchain', element: <Blockchain /> },
        { path: 'distributed', element: <Distributed /> },
        { path: 'tokens', element: <Tokens /> },
        { path: 'coinbase', element: <Coinbase /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);
}
