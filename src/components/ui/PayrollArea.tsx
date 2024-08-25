import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { Download as DownloadIcon, Upload as UploadIcon } from '@mui/icons-material';

const PayrollArea = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      sx={{
       // backgroundColor: 'white',
        borderRadius: '8px',
       // boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap', // Ensures responsiveness
      }}
    >
      {/* Left Section */}
      <Box display="flex" alignItems="center" mb={{ xs: 2, sm: 0 }}>
        <Typography className='text-gray-800 text-[2rem]'  sx={{ mr: 2,
            fontSize:'1.2rem',
            fontWeight:'600'
         }}>
          Payroll Area
        </Typography>
        <Select
          defaultValue="MONTHLY"
          sx={{
            minWidth: '120px',
            fontSize:'0.9rem',
            borderColor: '#d3d3d3', 
            borderWidth:"1px",
            boxShadow:"initial",
            height: '40px',
          }}
        >
          <MenuItem sx={{ mr: 2,
            fontSize:'0.9rem',
           
         }}  value="MONTHLY">MONTHLY</MenuItem>
          <MenuItem
          sx={{ mr: 2,
            fontSize:'0.9rem',
           
         }} 
           value="WEEKLY">WEEKLY</MenuItem>
          <MenuItem
          sx={{ mr: 2,
            fontSize:'0.9rem',
           
         }} 
           value="BI-WEEKLY">YEARLY</MenuItem>
        </Select>
      </Box>

      {/* Right Section */}
      <Box display="flex" gap={1} flexWrap="wrap">
        <Button
          variant="contained"
          
          startIcon={<DownloadIcon />}
          sx={{ minWidth: '80px', height: '40px',
            backgroundColor:'#173c6b',
            fontSize:'0.7rem'
           }}
        >
          File Download
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<UploadIcon />}
          sx={{ minWidth: '80px', height: '40px',
            backgroundColor:'#173c6b',
            fontSize:'0.7rem'
           }}
        >
          Full Upload
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<UploadIcon />}
          sx={{ minWidth: '80px', height: '40px',
            backgroundColor:'#173c6b',
            fontSize:'0.7rem'
           }}
        >
          Partial Upload
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ minWidth: '80px', height: '40px',
            backgroundColor:'#173c6b',
            fontSize:'0.7rem'
           }}
        >
          File Template
        </Button>
      </Box>
    </Box>
  );
};

export default PayrollArea;
