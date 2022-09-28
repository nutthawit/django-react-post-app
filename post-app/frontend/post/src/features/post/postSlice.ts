import { createSlice } from '@reduxjs/toolkit';

export interface PostState {
  error: null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  posts: any[];
}

const initialState: PostState = {
    posts: [],
    status: 'idle',
    error: null,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
})

export default postSlice.reducer;