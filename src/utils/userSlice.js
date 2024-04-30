import { createSlice } from "@reduxjs/toolkit";
//When there is no user keep initialState as null. 
const userSlice= createSlice({
    name:"user",
    initialState:null,
    reducers:{
        //As soon as we login, addUser action will be dispatch and we add user to store.
        /*Q:- What happen when we return action.payload ?
        Ans:-when we return action.payload then state become action.payload.*/
        addUser:( state,action)=>{
            return action.payload;
        },
        //When we signOut, removeUser action will be dispatch and we remove user from store .
        removeUser:()=>{
            return null;
        }
    }
})
export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;