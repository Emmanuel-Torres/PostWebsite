import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../services/api-service";

const getCommentsByPostId = createAsyncThunk(
    'getCommentsById',
    async (postId, thunkAPI) => {
        return await apiService.getCommentsByPostId(postId);
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
    }
})

export const commentsActions = commentsSlice.actions;
export default commentsSlice;