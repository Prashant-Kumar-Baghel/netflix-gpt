import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  //Using custom hook to fetch API So that our code is clean and optimized.
  useNowPlayingMovies();
  return (
    <div>
      <Header/> 
      <MainContainer/>
      <SecondaryContainer/>
    
    </div>
  )
}

export default Browse
