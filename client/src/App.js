import React, { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import FilterSidebar from './components/FilterSidebar';
import {Box, Container, Grid, TextField } from '@mui/material';
import { Pagination } from '@mui/material';


function App() { 
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [page, setPage] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const fetchMovies = async (query = '', genre = '', pageNumber = 0) => {
    const response = await fetch(
      `http://localhost:8080/?title=${encodeURIComponent(query)}&genre=${encodeURIComponent(genre)}&page=${pageNumber}&size=20&sort=title&direction=ASC`
    );

    const data = await response.json();
    setMovies(data.content);
    setTotalElements(data.totalElements);
  };

  useEffect(() => {
    fetchMovies(searchQuery, genreFilter, page);
  }, [searchQuery, genreFilter, page]);
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (genre) => {
    setGenreFilter(genre);
  };

  const handleChangePage = (event, value) => {
    setPage(value -1);
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mt: 2, mb: 2 }}>
          <TextField
            label="Search movies..."
            value={searchQuery}
            onChange={handleSearch}
            sx={{ width: '50%', marginRight: 2 }}
          />
          <FilterSidebar onFilter={handleFilter} />
        </Box>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={Math.ceil(totalElements / 20)}
            page={page + 1}
            onChange={handleChangePage}
            siblingCount={1}
            boundaryCount={1}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
  

  
  
}
export default App;