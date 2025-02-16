import { combineReducers } from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import blogReducer from "../slices/blogSlice"


const rootReducer= combineReducers({
    auth: authReducer,
    profile: profileReducer,
    blog: blogReducer
})

export default rootReducer;