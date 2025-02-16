import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allBlogs: localStorage.getItem("allBlogs") ? JSON.parse(localStorage.getItem("allBlogs")) : [],
}

const blogSlice= createSlice({
    name:"blog",
    initialState: initialState,
    reducers:{
        setAllBlogs(state,value){
            state.allBlogs=value.payload;
        }
    }
})

export const {setAllBlogs}= blogSlice.actions;
export default blogSlice.reducer;