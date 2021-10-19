import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiService } from "../services/api-service"

const getPosts = createAsyncThunk(
    'getPosts',
    async (args, thunkAPI) => {
        return await apiService.getPosts();
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }
});

export const postsActions = postsSlice.actions;
export default postsSlice;