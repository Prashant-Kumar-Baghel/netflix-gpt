import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect} from "react";
import { options } from "../utils/constants";
//we are fetching TMDB API and update store.
//To Get Movies List just go to Documentation->API Reference->Movie List->Now Playing-> we can see GET url to fetch the data(or code inside FETCH REQUEST)
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
  const fetchData=async ()=>{
    //we remove language=en-US from below api url as we don't want only english movies. 
    const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options);
    const data = await response.json();

    //we have two ways to use NowPlayingMovies list data 1) using state variable i.e create state variable and update that state variable when we get data using fetch api and  return that state variable then we can access that data 2) using redux store that is when we get NowPlayingMovies data just store that data inside redux store and we can use that data from store. now when we use redux store then we don't need to create state variable . using redux components don't need to manage their own state so put the data inside central store and retrive anywhere we want.
    dispatch(addNowPlayingMovies(data?.results));//create addNowPlayingMovies reducer inside moviesSlice.
    // console.log("Data",data?.results)
  }
  
 
  useEffect(()=>{
    //we call api inside useEffect so that we can call it only once.otherwise we get api call on every render. now we call api only when component is loaded(ie page load .)
    fetchData();
  },[]) 
  
}
export default useNowPlayingMovies;