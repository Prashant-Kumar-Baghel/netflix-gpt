import React from 'react'

    const VideoTitle = ({original_title,overview}) => {
  return (
    //we want to get the tittle on top of the video thatswhy we provide absolute value to tittle div tag.   
    //Providing  w-screen aspect-video here so that tittle container cover video fully.
    <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video text-white'>
      <p className='text-4xl font-bold'>{original_title}</p>
      <p className='w-1/2 text-[1.1rem] pt-2'>{overview}</p>
      <div className='mt-5'>
        <button className='bg-white text-black text-[1.1rem] rounded-md px-10 py-2 mr-4 hover:bg-opacity-70'> ▷ Play</button>
        <button className='bg-gray-400 text-black text-[1.1rem] rounded-md px-10 py-2 '> ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
