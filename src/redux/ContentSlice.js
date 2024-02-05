import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    content : [],
    isLoading: false,
    isError: null,
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    //https://jsonplaceholder.typicode.com/posts
    //https://node5.onrender.com/user/user
    async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data
        return data
    }
)

const contentSlice = createSlice({
    name:'content',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchContent.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled,(state,action)=>{
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchContent.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        })
    }
})
export default contentSlice.reducer