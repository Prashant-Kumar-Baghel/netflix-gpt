import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upComingMovies:null,
        topRatedMovies:null,
        trendingMovies:null
    },
    reducers:{
        //we store all NowPlayingMovies movies data inside nowPlayingMovies variable;
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },

        //we store trailer video details inside trailerVideo
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        //we store PopularMovies details inside popularMovies
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        //we store UpComingMovies details inside upComingMovies
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        },
        //we store UpComingMovies details inside upComingMovies
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        //we store UpComingMovies details inside upComingMovies
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        }
    }
})
 export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpComingMovies,addTopRatedMovies,addTrendingMovies} =   moviesSlice.actions;
 export default moviesSlice.reducer; 