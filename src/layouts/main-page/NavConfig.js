import Iconify from '../../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Hash Function',
    path: '/main/hash',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'The block',
    path: '/main/block',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Blockchain',
    path: '/main/blockchain',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Distributed',
    path: '/main/distributed',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Tokens',
    path: '/main/tokens',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Coinbase',
    path: '/main/coinbase',
    icon: getIcon('eva:person-add-fill'),
  }
];

export default navConfig;
