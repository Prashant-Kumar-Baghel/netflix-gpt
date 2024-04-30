import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  //we subscribe to nowPlayingMovies as movies store inside it. and we get lsit of nowPlayingMovies.
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

  if(!movies) return;//if(movies===null) return and if(!movies) return are same.we write this condition because before the store executed the nowPlayingMovies is null and we can't do null[0] .
  const mainMovie=movies[0];//we do this because movies variable has list of movies and we want only one movie in background.
  console.log("mainMovie",mainMovie);
  return (
    <div>
      <VideoTitle original_title={mainMovie?.original_title} overview={mainMovie?.overview}/>
      <VideoBackground moviesId={mainMovie?.id} />
    </div>
  )
}

export default MainContainer
