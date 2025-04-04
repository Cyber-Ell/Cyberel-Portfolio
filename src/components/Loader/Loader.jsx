import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const loader = () => {
  return (
    <div>
      <Box  sx={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#1f2937',
       }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default loader