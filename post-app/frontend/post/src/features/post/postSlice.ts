import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface PostState {
  error: string | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  posts: any[];
}

const initialState: PostState = {
    error: undefined,
    status: 'idle',
    posts: [],
};

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async() => {
        const response = await fetch('http://localhost:8000/posts/');
        const data = await response.json();
        return data;
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
          .addCase(fetchPosts.pending, (state, action) => {
              state.status = 'loading';
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.posts = state.posts.concat(action.payload);
          })
          .addCase(fetchPosts.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message
          })
    },
});

export default postSlice.reducer;

export const selectAllPosts = (state: RootState) => state.post.posts;