import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Typography } from '@material-ui/core';

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = <Box display={"flex"}>
    <Box component="img" src="/static/icons/blockchain-2.png" sx={{ width: 40, height: 40, ...sx }} />
    <Typography variant='overline' align='center' style={{marginLeft: 8, height: 60}}>BC Explained</Typography>
  </Box>

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/hash">{logo}</RouterLink>;
}
