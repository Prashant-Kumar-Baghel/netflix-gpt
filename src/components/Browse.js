import React  from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';
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

  //Get isShowGptSeach using useSelector hook.
  const isShowGptSeach=useSelector((store)=>store.gpt.isShowGptSeach);
  return (
    <div>
      <Header/> 
      {/* we want to create Gpt Search inside the browse page.By default isShowGptSeach is fase then only <MainContainer/>
      <SecondaryContainer/> show and when we click on button then isShowGptSeach become true and <GptSearch/> component will show . */}
      {isShowGptSeach? <GptSearchPage/> : 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
      
    
    </div>
  )
}

export default Browse
