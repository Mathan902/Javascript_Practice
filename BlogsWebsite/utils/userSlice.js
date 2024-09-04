import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState : {name : '',email : '',loginStatus : false},
    reducers :{
        loginUserAccount(state,action) {
            return {...state,name:action.name,email:action.email,loginStatus : true};
        },
        logoutUserAccount(state,action) {
            return {...state,name:'',email:'',loginStatus : false};
        }
    }
});
export const {loginUserAccount,logoutUserAccount} = userSlice.actions;
export default userSlice;