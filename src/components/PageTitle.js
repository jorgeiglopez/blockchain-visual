import React from 'react';
import { styled } from '@mui/material/styles';

function PageTitle({title}) {

  const TitleStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.2rem',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }));
  
  return (
    <TitleStyle>{title}</TitleStyle>
  )
}

export default PageTitle;