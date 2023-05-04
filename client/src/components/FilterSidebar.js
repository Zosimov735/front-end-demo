import React from 'react';
import { Box, Typography } from '@mui/material';

const FilterSidebar = ({ onFilter }) => {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h6">Filter by Genre</Typography>
      <select onChange={handleFilter}>
        <option value="">All Genres</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        {/* Add more genres as needed */}
      </select>
    </Box>
  );
};

export default FilterSidebar;


