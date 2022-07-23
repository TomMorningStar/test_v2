import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type IPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PostsSliceState {
  posts: IPosts[];
  status: Status;
}

const initialState: PostsSliceState = {
  posts: [],
  status: Status.LOADING,
};

type IArgs = {
  value?: string;
  skipPosts?: number;
  searchTitle?: string;
  searchUserId?: number;
  searchBody?: string;
};

export const fetchPosts = createAsyncThunk<IPosts[], IArgs>(
  "posts/fetchPosts/Status",
  async ({ value, skipPosts, searchTitle }) => {
    const { data } = await axios.get<IPosts[]>(
      `https://jsonplaceholder.typicode.com/posts${
        value ? "" : `?_start=${String(skipPosts)}&_limit=10${searchTitle}`
      }`
    );

    // https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10&_sort=title&_order=asc
    return data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING;
      state.posts = [];
    });
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<IPosts[]>) => {
        state.posts = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts = [];
      state.status = Status.ERROR;
    });
  },
});

export default postsSlice.reducer;
