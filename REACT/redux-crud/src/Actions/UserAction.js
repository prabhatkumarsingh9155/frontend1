import { createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk"

import UserApi from "../API/UserApi"
const createUser=createAsyncThunk("user/create",async(user)=>{
const res =await UserApi.readAll()
return res.data

})


const retriveAll=createAsyncThunk("user/retrive/All",async()=>{})



const retriveSingle=createAsyncThunk("user/retrive/Single",async(id)=>{})

const updateUser=createAsyncThunk("user/update",async({user,id})=>{})

const deleteUser=createAsyncThunk("user/delete",async(id)=>{})

export{createUser,retriveAll,retriveSingle,updateUser,deleteUser}