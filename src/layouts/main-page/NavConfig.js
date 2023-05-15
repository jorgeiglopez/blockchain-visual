import Iconify from '../../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Hash Function',
    path: '/',
    icon: getIcon('carbon:function'),
  },
  {
    title: 'The block',
    path: '/block',
    icon: getIcon('clarity:block-line'),
  },
  {
    title: 'Blockchain',
    path: '/blockchain',
    icon: getIcon('icon-park-outline:blockchain'),
  },
  {
    title: 'Ledger',
    path: '/ledger',
    icon: getIcon('emojione-monotone:ledger'),
  },
  {
    title: 'Coinbase',
    path: '/coinbase',
    icon: getIcon('cib:bitcoin'),
  }
];

export default navConfig;
