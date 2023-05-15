import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Typography } from '@material-ui/core';

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const logo = <Box display="flex" alignItems="center">
    <Box component="img" src="/static/icons/blockchain-2.png" sx={{ width: 40, height: 40 }} mr={1} />
    <Typography
      align="left"
      style={{
        marginLeft: 1,
        fontFamily: "'Arial Narrow', sans-serif",
        fontSize: '1.4rem',
        transform: 'scaleY(1.5)'
      }}
    >
      BC Explained
    </Typography>
  </Box>;

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>{logo}</RouterLink>;
}
