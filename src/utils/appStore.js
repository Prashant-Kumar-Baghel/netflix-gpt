import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore= configureStore({
    // app reducer have different reducer for different slices. 
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        config:configReducer
    }
})
export default appStore;