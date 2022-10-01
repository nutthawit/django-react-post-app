import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

export const fetchAuthors = createAsyncThunk(
    'authors/fetchUsers', async () => {
        const response = await fetch('http://localhost:8000/authors/');
        const data = await response.json();
        return data;
});

export const authorSlice = createSlice({
    name: "author",
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export default authorSlice.reducer;

export const selectAllAuthors = (state: RootState) => state.author;

export const selectAuthorById = (state: RootState, authorId: number) =>
  state.author.find(author => author.id === authorId);