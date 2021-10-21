import { configureStore } from '@reduxjs/toolkit'

import commentsSlice from './comments-slice'
import postsSlice from './posts-slice'
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { comments: commentsSlice.reducer, posts: postsSlice.reducer, ui: uiSlice.reducer }
});

export default store;