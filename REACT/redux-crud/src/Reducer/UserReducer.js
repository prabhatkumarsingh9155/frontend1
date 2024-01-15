import { combineReducers, createAction, createSlice } from "@reduxjs/toolkit"
import { retriveAll,retriveSingle,createUser,updateUser,deleteUser } from "../Actions/UserAction"

// initial state

let initialState=[];

// reducer slice
const userSlice=createSlice({
name:"user",
initialState,
extraReducers:(builder)=>{


    builder.addCase(createUser.fulfilled,(state,action)=>{})
    .addCase(retriveAll.fulfilled,(state,action)=>{
        console.log('data=',action.payload)
    })

    .addCase(retriveSingle.fulfilled,(state,action)=>{})
    .addCase(updateUser.fulfilled,(state,action)=>{})
    .addCase(deleteUser.fulfilled,(state,action)=>{})
}


})

const UserReducer =combineReducers({
users:userSlice.reducer


})

export default UserReducer