import { configureStore } from '@reduxjs/toolkit'

import commentsSlice from './comments-slice'
import postsSlice from './posts-slice'

const store = configureStore({
    reducer: { comments: commentsSlice.reducer, posts: postsSlice.reducer }
});

export default store;