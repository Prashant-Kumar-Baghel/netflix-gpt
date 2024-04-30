import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        //we store all NowPlayingMovies movies data inside nowPlayingMovies variable;
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },

        //we store trailer video details inside trailerVideo
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
})
 export const {addNowPlayingMovies,addTrailerVideo} =   moviesSlice.actions;
 export default moviesSlice.reducer; 