import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useTrendingMovies from '../hooks/useTrendingMovies';
const Browse = () => {
  //Using custom hook to fetch API So that our code is clean and optimized.
  useNowPlayingMovies();
   //Using custom hook to fetch API So that our code is clean and optimized
   usePopularMovies();
    //Using custom hook to fetch API So that our code is clean and optimized
  useUpComingMovies();
  //Using custom hook to fetch API So that our code is clean and optimized
  useTopRatedMovies();
  //Using custom hook to fetch API So that our code is clean and optimized
  useTrendingMovies();
  return (
    <div>
      <Header/> 
      <MainContainer/>
      <SecondaryContainer/>
    
    </div>
  )
}

export default Browse
