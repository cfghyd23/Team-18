import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//make http post request to login user
export const userLogin=createAsyncThunk('loginuser',async(userCredObj,thunkApi)=>{
    let response=await axios.post("/user-api/login",userCredObj)
    let data=response.data
    if(data.message==='success')
    {
        //store token in local storage
        localStorage.setItem("token",data.payload);
        //localStorage.setItem("userObj", JSON.stringify(data.userObj))
        return data.userObj;
    }
    if(data.message==='Invalid Password' || data.message==='Invalid User')
    {
        return thunkApi.rejectWithValue(data)
    }
})

export const userSlice=createSlice({
    name:'users',
    initialState:{
        userObj:{},
        isError:false,
        isSuccess:false,
        isLoading:false,
        errMsg:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.isSuccess=false;
            state.userObj=null;
            state.isError=false;
            state.errMsg='';
            return state;
        }
    },
    extraReducers:{
       //lifecycle of promise returned by createAsyncThunk
       [userLogin.pending]:(state,action)=>{
        state.isLoading=true;
       },
       [userLogin.fulfilled]:(state,action)=>{
        state.userObj=action.payload;
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.errMsg='';
       },
       [userLogin.rejected]:(state,action)=>{
        state.isError=true;
        state.isLoading=false;
        state.isSuccess=false;
        state.errMsg=action.payload.message;
       }
    }
})

//export action creators
export const{clearLoginStatus}=userSlice.actions;


//export reducers
export default userSlice.reducer;
