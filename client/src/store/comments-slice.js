import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../services/api-service";

export const getCommentsByPostId = createAsyncThunk(
    'getCommentsById',
    async (postId, thunkAPI) => {
        return await apiService.getCommentsByPostId(postId);
    }
)

export const addComment = createAsyncThunk(
    'addComment',
    async (data, thunkAPI) => {
        
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        currentComment: null
    },
    reducers: {
        setCurrentComment(state, action) {
            state.currentComment = action.payload;
        },
        clearCurrentComment(state, action) {
            state.currentComment = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
    }
})

export const { setCurrentComment, clearCurrentComment } = commentsSlice.actions;
export default commentsSlice;