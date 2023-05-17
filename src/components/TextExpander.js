import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Iconify from './Iconify';
import { styled } from '@mui/material/styles';

function TextExpander({ title, children }) {
  const WrapperStyle = styled('div')(({ theme }) => ({
    // marginBottom: theme.spacing(1),
    boxShadow: 'none', 
    backgroundColor: 'transparent',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      // paddingTop: theme.spacing(1),
      // paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '1rem',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    }
  }));

  return (
    <WrapperStyle>
      <Accordion sx={{ boxShadow: 'inherit', backgroundColor: 'inherit', mt: 'inherit', mb: 'inherit', pt: '8px', pb: '8px' }}>
        <AccordionSummary expandIcon={<Iconify icon={'bi:arrow-down'} />} sx={{ padding: 0 }}>
          <Typography variant='overline'>🔎 Learn more about {title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'inherit', mb: '8px' }}>
          <Typography sx={{fontSize: "inherit"}}>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </WrapperStyle>
  );
}

export default TextExpander;