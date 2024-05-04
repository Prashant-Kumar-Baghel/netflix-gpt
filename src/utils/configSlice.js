import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        //By Default selected language is english
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }
})
export const {changeLanguage}= configSlice.actions;
export default configSlice.reducer;