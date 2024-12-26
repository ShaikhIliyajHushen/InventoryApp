import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const PageBreadcrumbs = ({ AddingItem ,viewToggleBtn}) => {
  return (
    <div style={{ backgroundColor: 'white', marginTop: 0 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <HomeIcon fontSize="small" sx={{ color: '#5570F1' }} />
        <Link href="/Landing/Dashboard" style={{fontSize:'13px',color: 'blue',textDecoration: 'none',}}>
          Inventory
        </Link>
        {AddingItem && (
          <Typography color="text.primary" style={{fontSize:'12px'}}>New Inventory</Typography>
        )}
         {viewToggleBtn && (
          <Typography color="text.primary" style={{fontSize:'13px'}}>View Inventory</Typography>
        )}   

      </Breadcrumbs>
    </div>
  );
};

export default PageBreadcrumbs;
