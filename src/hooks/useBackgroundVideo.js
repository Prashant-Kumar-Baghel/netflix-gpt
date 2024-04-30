import  { useEffect} from 'react'
import {options} from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

//Fetch the trailer video and Updating the store with trailer video data .
//To Get Movie trailer video just go to Documentation->API Reference->Movies->Videos-> we can see GET url to fetch the data(or code inside FETCH REQUEST)
//we need to write movie id in fetch url to get trailer video hence useBackgroundVideo take moviesId as argument.

const useBackgroundVideo = (moviesId) => {
    const dispatch=useDispatch();
    const fetchData=async ()=>{
        
        const response=await fetch(`https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`, options);//this fetch url gives me all the videos associated to movie.
        const data=await response.json();//data?.results contain list all videos associated to movie.
        // console.log("response",data);
        const filterData=data?.results?.filter((video)=>video?.type==="Trailer");//filtering list to get trailer video.
        const Trailer=filterData.length?filterData[0]:data[0];//movie can have two or more trailer hence we do filterData[0].Trailer is an object and it has attribute key which is youtube key which help us to fetch the trailer(video) from youtube.
        // console.log("filterData",Trailer)
        dispatch(addTrailerVideo(Trailer));//store the trailer insode redux store.
    }
  useEffect(()=>{
    fetchData();
  },[])
  
}

export default useBackgroundVideo
