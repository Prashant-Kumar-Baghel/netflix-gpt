import React from 'react'
import { poster_IMG_CDN } from '../utils/constants'

const MovieCard = ({movieItem}) => {
    //In movie we have given poster_path which name of image(poster) but we have to find out the full path of image for that Guide->images->Basics
  return (
    <div className='w-[8vw]'>
      <img src={poster_IMG_CDN+movieItem?.poster_path} alt="Movie Card"
       />
    </div>
  )
}

export default MovieCard
