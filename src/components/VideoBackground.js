import React from 'react'
import useBackgroundVideo from '../hooks/useBackgroundVideo'
import { useSelector } from 'react-redux';

const VideoBackground = ({moviesId}) => {
    //Using custom hook to fetch API So that our code is clean and optimized. so always try to make your code small and this also known as moduler coding(Breaking code into small pieces i.e we creating small modules) and this moduler coding also helps in testing the code so my code become more testable , more moduler, more cleaner, more readable.
    useBackgroundVideo(moviesId);

    const trailer=useSelector((store)=>store?.movies?.trailerVideo);
       console.log("trailer",trailer)
  return (
    <div>
        {/* When i put iframe tag then i get some warnings like invalid DOM property fameborder so to remove that warning we write these attribute in camelCase(In JSX we use camelCase) like fameborder replace by fameBorder(or we can remove these keyword). */}
        {/* Every youtube video has an key like In this youtube url https://www.youtube.com/watch?v=jYezAyW0x0E  "jYezAyW0x0E" is an key. */}
        {/* To use any youtube video we use iframe tag hence in src we has link of youtube video which we can change based on key. */}
        {/* when we do w-screen then aspect ratio of video become wrong to correct that we use aspect-video property which maintain the aspect ratio then it set aspect ratio as 16/9 because all video has aspect ratio 16/9. */}
       {/* ?&autoplay=1&mute=1 helps to play youtube video automatically */}
      <iframe 
      className='w-screen aspect-video '
       src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground
