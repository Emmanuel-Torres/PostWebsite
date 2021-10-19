import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../services/api-service"

export const getPosts = createAsyncThunk(
    'getPosts',
    async (args, thunkAPI) => {
        return await apiService.getPosts();
    }
)

export const addPost = createAsyncThunk(
    'addPosts',
    async (post, thunkAPI) => {
        await apiService.addPost(post);
        return await apiService.getPosts();
    }
)

export const updatePost = createAsyncThunk(
    'updatePost',
    async (post, thunkAPI) => {
        console.log(post);
        await apiService.updatePost(post.post_id, post);
        return await apiService.getPosts();
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        currentPost: null
    },
    reducers: {
        setCurrentPost(state, action) {
            state.currentPost = action.payload;
        },
        clearCurrentPost(state, action) {
            state.currentPost = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.currentPost = action.payload.find(p => p.post_id === state.currentPost.post_id);
            })
    }
});

export const { setCurrentPost, clearCurrentPost } = postsSlice.actions;
export default postsSlice;