import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/main-page';
import NotFound from './pages/Page404';
import HashFunction from "./pages/HashFunction";
import { TheBlock } from './pages/TheBlock';
import { Blockchain } from './pages/Blockchain';
import { Ledger } from './pages/Ledger';
import { Coinbase } from './pages/Coinbase';


export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: 'hash', element: <HashFunction /> },
        { path: 'block', element: <TheBlock /> },
        { path: 'blockchain', element: <Blockchain /> },
        { path: 'Ledger', element: <Ledger /> },
        { path: 'coinbase', element: <Coinbase /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);
}
