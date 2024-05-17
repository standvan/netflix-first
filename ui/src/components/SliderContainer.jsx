import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

export default React.memo (function SliderContainer ({movies}){
  const getMoviesFromRange = (from,to) => {
    return movies.slice(from,to)
  }
  return (
    <Container>
      <MovieSlider data={getMoviesFromRange(0,10)} title='Popular on netflix'></MovieSlider>
      <MovieSlider data={getMoviesFromRange(10,20)} title='Trending now'></MovieSlider>
      <MovieSlider data={getMoviesFromRange(20,30)} title='Actions movies'></MovieSlider>
      <MovieSlider data={getMoviesFromRange(30,40)} title='Romantic movies'></MovieSlider>
      <MovieSlider data={getMoviesFromRange(40,50)} title='Epic'></MovieSlider>
      <MovieSlider data={getMoviesFromRange(50,60)} title='New releases'></MovieSlider>
    </Container>
  )
});
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
