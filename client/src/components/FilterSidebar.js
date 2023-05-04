import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const FilterSidebar = ({ onFilter }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreOptions = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Science Fiction',
    'TV Movie',
    'Thriller',
    'War',
    'Western'
  ];

  const handleChange = (e) => {
    const selectedOptions = e.target.value;
    setSelectedGenres(selectedOptions);
    onFilter(selectedOptions.includes('All Genres') ? '' : selectedOptions);
  };

  return (
    <Box>
      <Typography variant="h6">Filter by Genre</Typography>
      <FormControl fullWidth variant="outlined" sx={{ mt: 1 }}>
        <InputLabel htmlFor="genres-select">Genres</InputLabel>
        <Select
          labelId="genres-select-label"
          id="genres-select"
          multiple
          value={selectedGenres}
          onChange={handleChange}
          label="Genres"
        >
          {genreOptions.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedGenres.length > 0 && (
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            Selected Genres: {selectedGenres.join(', ')}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FilterSidebar;