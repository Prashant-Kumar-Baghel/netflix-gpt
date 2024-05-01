import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movieTitle,nowPlayingMovies}) => {
  return (
   <div className='p-6 '>
    <h2 className='text-bold text-3xl pb-4 text-white'>{movieTitle}</h2>
    {/* we provide flex on outer div container because  Flexbox allows for dynamic resizing and positioning of elements. It's useful when you want the child elements to adjust their sizes and positions based on the available space. */}
    <div className='flex overflow-x-scroll cursor-grab scrollDiv'>
      <div className='flex gap-4 ' >
      {nowPlayingMovies?.map((movie)=><MovieCard movieItem={movie} key={movie?.id}/>)}
      </div>
    </div>
</div>
  )
}

export default MovieList
