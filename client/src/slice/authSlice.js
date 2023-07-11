import {createSlice} from "@reduxjs/toolkit";

const initlaState = {
    token:localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
}

const authSlice   = createSlice({
    name:"auth",
    initlaState:initlaState,
    reducers: {
        setToken(state, value){
            state.token = value.payload
        }
    }
})