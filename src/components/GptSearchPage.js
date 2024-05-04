import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMoviesSuggestion from './GptMoviesSuggestion';
import { LOGIN_URL } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div className='text-white'>
      {/* When we provide absolute property to below div then searchbar get hide thatswhy to get below image behind we provide negative z-index. */}
      <div className='absolute -z-40'>
        <img src={LOGIN_URL} alt="" />
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>
    </div>
  )
}

export default GptSearchPage;
