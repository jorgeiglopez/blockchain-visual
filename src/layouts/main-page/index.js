import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Hidden } from '@mui/material';

const APP_BAR_MOBILE = 34;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: 24, // + APP_BAR_DESKTOP = 92,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));


export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <Hidden lgUp>
        <Navbar onOpenSidebar={() => setOpen(true)} />
      </Hidden>
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
