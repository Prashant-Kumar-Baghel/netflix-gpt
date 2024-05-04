import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        //Default value of isShowGptSeach is false.Intially we don't want to show gptSearchpage.
        isShowGptSeach:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            //Toogle Mechanism
            state.isShowGptSeach=!state.isShowGptSeach;
        }
    }
})
export const {toggleGptSearchView}=gptSlice.actions;
export default gptSlice.reducer;