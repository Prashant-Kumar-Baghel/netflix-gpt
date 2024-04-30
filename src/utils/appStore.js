import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./moviesSlice"
const appStore= configureStore({
    // app reducer have different reducer for different slices. 
    reducer:{
        user:userReducer,
        movies:movieReducer
    }
})
export default appStore;