// task.slice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TodoState {
  isLoading: boolean;
  error: boolean;
  value: number | null;
}

const initialState: TodoState = {
  isLoading: false,
  error: false,
  value: null,
};

export const fetchTask = createAsyncThunk("todo/fetchTask", async () => {
  const { data: todo } = await axios.get<number | null>("todo.json");
  return todo || 0;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value = action.payload;
      })
      .addCase(fetchTask.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default todoSlice.reducer;
