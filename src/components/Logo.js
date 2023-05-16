import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const logo = <Box display="flex" alignItems="center">
    <Box component="img" src="/static/icons/blockchain-2.png" sx={{ width: 40, height: 40 }} />
    <Typography
      align="left"
      sx={{
        marginLeft: 1,
        fontFamily: "'Arial Narrow', sans-serif",
        transform: 'scaleY(1.5)',
        [theme.breakpoints.up('lg')]: {
          fontSize: '1.3rem',
          fontWeight: 600
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: '1.1rem',
          fontWeight: 500
        },
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
