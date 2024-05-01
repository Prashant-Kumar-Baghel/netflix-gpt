import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  //fetching all the nowPlayingMovies from redux store.
  const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
  
  //fetching all the popularMovies from redux store.
  const popularMovies=useSelector((store)=>store.movies.popularMovies)

  //fetching all the upComingMovies from redux store.
  const upComingMovies=useSelector((store)=>store.movies.upComingMovies)

  //fetching all the upComingMovies from redux store.
  const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)

  //fetching all the upComingMovies from redux store.
  const trendingMovies=useSelector((store)=>store.movies.trendingMovies)

  return (
    <div className='bg-black'>
      {/* Below Provide position as relative because we need to use z-index and we can't use z-index on static position. */}
      <div className='relative z-50 mt-[-45vh] pl-12'>
      <MovieList movieTitle="NowPlaying Movies" nowPlayingMovies={nowPlayingMovies} />
      <MovieList movieTitle="Trending Movies" nowPlayingMovies={trendingMovies} />
      <MovieList movieTitle="TopRated Movies" nowPlayingMovies={topRatedMovies} />
      <MovieList movieTitle="Popular" nowPlayingMovies={popularMovies} />
      <MovieList movieTitle="Upcoming Movies" nowPlayingMovies={upComingMovies} />
      </div>
  
    
    </div>
  )
}

export default SecondaryContainer
