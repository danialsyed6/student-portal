import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 5 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
